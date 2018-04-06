<template>
  <div class="login-container" style="background-color: #141a48;margin: 0px;overflow: hidden;">
    <div id="canvascontainer" ref='can'></div>
  </div>
</template>

<script>
  var THREE = require('@/assets/js/three.min').default
  var SEPARATION = 100
  var AMOUNTX = 30
  var AMOUNTY = 30
  var container = ''
  var particle = ''
  var count = 0
  var mouseX = 0
  var mouseY = 0
  var windowHalfX = window.innerWidth / 2
  var windowHalfY = window.innerHeight / 2

  export default {
    name: 'background',
    data() {
      return {
        camera: {},
        renderer: '',
        scene: '',
        particles: null
      }
    },
    mounted() {
      container = document.createElement('div')
      this.$refs.can.appendChild(container)
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000)
      this.camera.position.z = 1000
      this.scene = new THREE.Scene()
      this.particles = []
      var PI2 = Math.PI * 2
      var material = new THREE.ParticleCanvasMaterial({
        color: 0x0078de,
        program: function(context) {
          context.beginPath()
          context.arc(0, 0, 1, 0, PI2, true)
          context.fill()
        }
      })
      var i = 0
      for (var ix = 0; ix < AMOUNTX; ix++) {
        for (var iy = 0; iy < AMOUNTY; iy++) {
          particle = this.particles[ i++ ] = new THREE.Particle(material)
          particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2)
          particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2)
          this.scene.add(particle)
        }
      }
      this.renderer = new THREE.CanvasRenderer()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      container.appendChild(this.renderer.domElement)
      document.addEventListener('mousemove', this.onDocumentMouseMove, false)
      //
      window.addEventListener('resize', this.onWindowResize, false)
      this.animate()
    },
    methods: {
      onWindowResize() {
        windowHalfX = window.innerWidth / 2
        windowHalfY = window.innerHeight / 2
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
      },
      onDocumentMouseMove(event) {
        mouseX = event.clientX - windowHalfX
        mouseY = event.clientY - windowHalfY
      },
      animate() {
        requestAnimationFrame(this.animate)
        this.render()
      },
      render() {
        this.camera.position.x += (mouseX - this.camera.position.x) * 0.05
        this.camera.position.y += (-mouseY - this.camera.position.y) * 0.05
        this.camera.lookAt(this.scene.position)
        var i = 0
        for (var ix = 0; ix < AMOUNTX; ix++) {
          for (var iy = 0; iy < AMOUNTY; iy++) {
            particle = this.particles[ i++ ]
            particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50)
            particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2
          }
        }
        this.renderer.render(this.scene, this.camera)
        count += 0.1
      }
    }
  }
</script>
<style>
  .login-container a{color:#0078de;}
  #canvascontainer{
    position: absolute;
    top: 0px;
  }
  .wz-input-group-prepend{
    background-color: #141a48;
    border: 1px solid #2d8cf0;
    border-right: none;
    color:  #2d8cf0;
  }
</style>

<style rel="stylesheet/scss" lang="scss">
  .tips{
    font-size: 14px;
    color: #fff;
    margin-bottom: 5px;
  }
  .login-container {
    height: 100vh;
    background-color: #2d3a4b;
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: #889aa4;
    }
  }
</style>
