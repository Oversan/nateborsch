# Tile generation

Mac install:
- `brew install --cask hugin`
- `python3 -m pip install --upgrade Pillow`

Generation:
- put panorama image, for example, `Pano.jpg` to `tile-generation` folder
- run `python3 generate.py -n /Applications/Hugin/tools_mac/nona Pano.jpg`
- `output` folder will consist tiles for `pannellum.js`


# Run local server for static files

- `python3 -m http.server` in the root folder
- open `http://localhost:8000/`
