function report() {
  return {
    imgSrcs: [],
    sImgSrcs: [],
    lazyloadThrottleTimeout: null,
    lazyloadImages: [],
    init(imgSrcs, sImgSrcs) {
      this.imgSrcs = imgSrcs.map((imgSrc, idx) => ({
        loaded: idx < 2 ? true : false,
        imgSrc,
      }));

      this.sImgSrcs = sImgSrcs.map((imgSrc) => ({
        loaded: false,
        imgSrc,
      }));

      document.addEventListener("scroll", this.lazyload);
      window.addEventListener("resize", this.lazyload);
      window.addEventListener("orientationChange", this.lazyload);
    },
    lazyload() {
      if (this.lazyloadThrottleTimeout) {
        clearTimeout(this.lazyloadThrottleTimeout);
      }

      this.lazyloadThrottleTimeout = setTimeout(function () {
        let scrollTop = window.pageYOffset;
        if (!this.lazyloadImages) {
          this.lazyloadImages = document.querySelectorAll("img.lazy");
        }
        this.lazyloadImages.forEach((img) => {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src;
            img.classList.remove("lazy");
          }
        });
        if (this.lazyloadImages.length == 0) {
          document.removeEventListener("scroll", this.lazyload);
          window.removeEventListener("resize", this.lazyload);
          window.removeEventListener("orientationChange", this.lazyload);
        }
      }, 20);
    },
  };
}

export { report };