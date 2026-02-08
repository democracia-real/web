/**
 * Álbum de Diagnóstico: reproductor único, lista de pistas, siguiente/anterior, letras desde JSON
 */
(function() {
    'use strict';

    var player = document.getElementById('albumPlayer');
    var nowEl = document.getElementById('albumNow');
    var tracklist = document.getElementById('albumTracklist');
    var btnPrev = document.getElementById('albumPrev');
    var btnNext = document.getElementById('albumNext');

    if (!player || !tracklist) return;

    var tracks = Array.from(tracklist.querySelectorAll('.home-album-track'));
    var currentIndex = -1;
    var trackTitles = tracks.map(function(t) { return t.querySelector('.home-album-track-title').textContent; });
    var lyricsData = null;
    fetch('/audio/01-diagnostico/lyrics.json')
        .then(function(r) { return r.ok ? r.json() : null; })
        .then(function(d) {
            lyricsData = d;
            if (lyricsData && lyricsData.audioPath && lyricsData.tracks) {
                tracks.forEach(function(t, i) {
                    var tr = lyricsData.tracks[i];
                    if (tr && tr.audioFile) t.setAttribute('data-src', lyricsData.audioPath + tr.audioFile);
                });
            }
            if (!window.location.hash || !/^#album-track-0?\d$/.test(window.location.hash)) setTrack(0, false);
        })
        .catch(function() { if (!window.location.hash) setTrack(0, false); });

    function setTrack(index, autoPlay) {
        if (index < 0 || index >= tracks.length) return;
        currentIndex = index;
        var track = tracks[index];
        var src = track.getAttribute('data-src');
        if (!src) return;
        player.src = src;
        nowEl.textContent = (index + 1) + '. ' + trackTitles[index];
        tracks.forEach(function(t, i) {
            t.classList.toggle('home-album-track-current', i === index);
        });
        if (autoPlay !== false) player.play().catch(function() {});
    }

    function playNext() {
        var next = currentIndex + 1;
        if (next < tracks.length) setTrack(next);
    }

    function playPrev() {
        if (currentIndex <= 0) {
            player.currentTime = 0;
            if (currentIndex === 0) player.play().catch(function() {});
            return;
        }
        setTrack(currentIndex - 1);
    }

    player.addEventListener('ended', function() {
        playNext();
    });

    player.addEventListener('error', function() {
        if (nowEl) nowEl.textContent = 'Próximamente — selecciona otra pista';
    });

    btnPrev && btnPrev.addEventListener('click', playPrev);
    btnNext && btnNext.addEventListener('click', playNext);

    tracks.forEach(function(track, index) {
        var src = track.getAttribute('data-src');
        var playBtn = track.querySelector('.home-album-track-play');
        var lyricBtn = track.querySelector('.home-album-track-lyric');
        var lyricId = lyricBtn && lyricBtn.getAttribute('data-lyric');

        function playThis() {
            if (!src) {
                if (nowEl) nowEl.textContent = 'Próximamente';
                return;
            }
            setTrack(index);
        }

        track.addEventListener('click', function(e) {
            if (e.target.closest('button')) return;
            playThis();
        });
        if (playBtn) playBtn.addEventListener('click', function(e) { e.stopPropagation(); playThis(); });

        if (lyricBtn && lyricId !== null) {
            lyricBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                var modal = document.getElementById('lyricModal');
                if (!modal) return;
                var titleEl = modal.querySelector('.lyric-modal-title');
                var bodyEl = modal.querySelector('.lyric-modal-body');
                var id = parseInt(lyricId, 10);
                var title = (id + 1).toString().padStart(2, '0') + ' — ' + trackTitles[id];
                var lyrics = '(Letra pendiente)';
                if (lyricsData && lyricsData.tracks && lyricsData.tracks[id]) {
                    title = (id + 1).toString().padStart(2, '0') + ' — ' + lyricsData.tracks[id].title;
                    lyrics = lyricsData.tracks[id].lyrics || '(Letra pendiente)';
                }
                if (titleEl) titleEl.textContent = title;
                if (bodyEl) bodyEl.textContent = lyrics;
                modal.setAttribute('aria-hidden', 'false');
                modal.classList.add('lyric-modal-open');
                document.body.style.overflow = 'hidden';
                if (modal.querySelector('.lyric-modal-close')) modal.querySelector('.lyric-modal-close').focus();
            });
        }
    });

    var modal = document.getElementById('lyricModal');
    if (modal) {
        function closeLyricModal() {
            modal.setAttribute('aria-hidden', 'true');
            modal.classList.remove('lyric-modal-open');
            document.body.style.overflow = '';
        }
        modal.querySelector('.lyric-modal-close').addEventListener('click', closeLyricModal);
        modal.querySelector('.lyric-modal-backdrop').addEventListener('click', closeLyricModal);
        modal.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeLyricModal();
        });
    }

    setTrack(0, false);

    var hash = window.location.hash;
    if (hash && /^#album-track-0?(\d)$/.test(hash)) {
        var n = parseInt(RegExp.$1, 10);
        if (n >= 1 && n <= tracks.length) setTrack(n - 1, false);
    }

    function getShareUrl(index) {
        var base = window.location.origin + window.location.pathname;
        return base + '#album-track-0' + (index + 1);
    }
    function getShareText(index) {
        var title = (lyricsData && lyricsData.tracks && lyricsData.tracks[index]) ? lyricsData.tracks[index].title : trackTitles[index];
        return 'Escucha "' + title + '" del Álbum de Diagnóstico - Democracia Real';
    }

    function openShare(index, anchorEl) {
        var i = index >= 0 && index < tracks.length ? index : 0;
        var url = getShareUrl(i);
        var text = getShareText(i);
        var full = text + ' ' + url;
        if (navigator.share) {
            navigator.share({ title: text, text: text, url: url }).catch(function() {});
            return;
        }
        var shareDropdown = document.getElementById('albumShareDropdown');
        var shareWa = document.getElementById('albumShareWa');
        var shareX = document.getElementById('albumShareX');
        var shareCopy = document.getElementById('albumShareCopy');
        if (shareDropdown && shareWa && shareX && shareCopy && anchorEl) {
            shareWa.href = 'https://wa.me/?text=' + encodeURIComponent(full);
            shareX.href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url);
            shareCopy.onclick = function() {
                navigator.clipboard.writeText(full).then(function() {
                    shareCopy.textContent = '¡Copiado!';
                    setTimeout(function() { shareCopy.textContent = 'Copiar enlace'; }, 1500);
                });
            };
            var rect = anchorEl.getBoundingClientRect();
            shareDropdown.style.position = 'fixed';
            shareDropdown.style.top = (rect.bottom + 6) + 'px';
            shareDropdown.style.left = Math.max(8, rect.left) + 'px';
            shareDropdown.setAttribute('aria-hidden', 'false');
            shareDropdown.classList.add('home-album-share-dropdown-open');
        }
    }

    var shareDropdown = document.getElementById('albumShareDropdown');
    var shareWa = document.getElementById('albumShareWa');
    var shareX = document.getElementById('albumShareX');
    var shareCopy = document.getElementById('albumShareCopy');

    tracklist.querySelectorAll('.home-album-track-share').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            openShare(parseInt(btn.getAttribute('data-share'), 10), btn);
        });
    });

    var playerShareBtn = document.getElementById('albumPlayerShare');
    if (playerShareBtn) {
        playerShareBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            openShare(currentIndex >= 0 ? currentIndex : 0, playerShareBtn);
        });
    }
    document.addEventListener('click', function() {
        if (shareDropdown) {
            shareDropdown.setAttribute('aria-hidden', 'true');
            shareDropdown.classList.remove('home-album-share-dropdown-open');
        }
    });
    if (shareDropdown) shareDropdown.addEventListener('click', function(e) { e.stopPropagation(); });
})();
