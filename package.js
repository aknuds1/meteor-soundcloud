'use strict'
Package.describe({
  summary: 'SoundCloud SDK',
  version: '1.0.0',
  name: 'aknudsen:soundcloud',
  git: 'https://github.com/aknuds1/soundcloud.git',
})

Package.onUse(function (api) {
  api.versionsFrom('0.9.0')
  api.addFiles('soundcloud.js', 'client')
  api.export('SoundCloud', 'client')
})
