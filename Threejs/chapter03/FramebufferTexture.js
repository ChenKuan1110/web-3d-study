(function () {
  class FramebufferTexture extends THREE.Texture {

    constructor(width, height, format) {
  
      super({ width, height });
  
      this.format = format;
  
      this.magFilter = THREE.NearestFilter;
      this.minFilter = THREE.NearestFilter;
  
      this.generateMipmaps = false;
  
      this.needsUpdate = true;
  
    }
  
  }
  
  FramebufferTexture.prototype.isFramebufferTexture = true;

  THREE.FramebufferTexture = FramebufferTexture;
})();

