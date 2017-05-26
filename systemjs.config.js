(function(global) {
  SystemJS.config({
    paths: {
      'npm:': 'node_modules/'
    },
    map: {
      'src': 'src',
      'rxjs': 'npm:rxjs'
    },
    packages: {
      src: {
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  })
})(this);