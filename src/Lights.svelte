<div class="blobs" role="presentation">
  <div class="blob-rotate">
    <div class="blob-move">
      <div class="blob"></div>
    </div>
  </div>
  <div class="blob-rotate">
    <div class="blob-move">
      <div class="blob"></div>
    </div>
  </div>
  <div class="blob-rotate">
    <div class="blob-move">
      <div class="blob"></div>
    </div>
  </div>
</div>

<style>
  :root {
    --blob-size: 600px;
    --blob-speed: 30s;
    --blob-speed-scale: calc(0.75 * var(--blob-speed));
    --blob-speed-move: calc(1 * var(--blob-speed));
    --blob-speed-rotate: calc(2 * var(--blob-speed));
    --blob-opacity: 0.2;
    --blob-blur: 40px;
    --blob-color-1: #ff1af0;
    --blob-color-2: #1af7ff;
    --blob-color-3: #1a75ff;
  }

  .blobs {
    position: absolute;
    inset: 0;
    height: 600px;
    widows: 100%;
    filter: blur(var(--blob-blur));
  }

  .blobs * {
    backface-visibility: hidden;
    transform-origin: 50%;
    transform-style: preserve-3d;
    will-change: transform;
  }

  .blobs:after {
    backdrop-filter: blur(8rem) saturate(1.6);
    z-index: 2;
    background: #b8b8b814;
    border-radius: 1.5rem;
    width: 22rem;
    height: 38rem;
    display: block;
    position: relative;
  }

  .blob {
    width: var(--blob-size);
    height: calc(0.25 * var(--blob-size));
    background-color: var(--blob-color-1);
    opacity: var(--blob-opacity);
    mix-blend-mode: multiply;
    animation: blob ease-in-out var(--blob-speed-scale) infinite;
    border-radius: 100%;
  }

  .blobs > :nth-child(2) .blob {
    background-color: var(--blob-color-2);
    animation-delay: calc(-0.8 * var(--blob-speed-scale));
  }

  .blobs > :nth-child(3) .blob {
    background-color: var(--blob-color-3);
    animation-delay: calc(-0.2 * var(--blob-speed-scale));
  }

  @keyframes blob {
    0%,
    100% {
      transform: scale(0.8, 2);
    }

    50% {
      transform: scale(1.4, 0.8);
    }
  }

  .blob-rotate {
    animation: blob-rotate linear var(--blob-speed-rotate) infinite alternate;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .blob-rotate:nth-child(2) {
    animation-duration: calc(2 * var(--blob-speed-rotate));
    animation-delay: calc(-1.5 * var(--blob-speed-rotate));
  }

  .blob-rotate:nth-child(3) {
    animation-direction: alternate-reverse;
    animation-duration: calc(0.8 * var(--blob-speed-rotate));
    animation-delay: calc(-1 * var(--blob-speed-rotate));
  }

  @keyframes blob-rotate {
    0% {
      transform-origin: 50% 100%;
      transform: translate3d(-50%, -50%, 0) rotateZ(-28deg);
    }

    100% {
      transform-origin: 50% 0;
      transform: translate3d(-50%, -50%, 0) rotateZ(28deg);
    }
  }

  .blob-move {
    animation: blob-move ease-in-out var(--blob-speed-move) infinite;
  }

  .blobs > :nth-child(2) .blob-move {
    animation-delay: calc(-0.8 * var(--blob-speed-move));
  }

  .blobs > :nth-child(3) .blob-move {
    animation-delay: calc(-0.4 * var(--blob-speed-move));
  }

  @keyframes blob-move {
    0%,
    100% {
      transform: translateX(30%);
    }

    50% {
      transform: translateX(-30%);
    }
  }
</style>
