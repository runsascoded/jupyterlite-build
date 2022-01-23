# 🚧→→ Folded into [runsascoded/jupyterlite-demo](https://github.com/runsascoded/jupyterlite-demo) ←←🚧

----

# Build+Deploy Jupyterlite
Minimal [Jupyterlite](https://jupyterlite.readthedocs.io/en/latest/) (Jupyter in the browser, including the "server") deployment example, adapted from [jupyterlite/demo](https://github.com/jupyterlite/demo).

## Demo
- Direct link to an interactive notebook on GitHub Pages: https://runsascoded.com/jupyter/lite/retro/notebooks/?path=plotly-test.ipynb
- Corresponding JuypterLab interface: https://runsascoded.com/jupyter/lite/ 

## Deploying Jupyterlite (including example notebooks) to GitHub Pages:
I want to publish+share notebooks on static sites, without running a server, and also have them be live/interactive. Jupyterlite is a very cool project that enables exactly this, but the last few steps to deploy it myself took some time to figure out.

You basically need two directories:
- one containing example notebooks to include in your Jupyterlite static bundle (I call it `content` here)
- one to write the built static bundle to (I call it `lite` here, because I've embedded this repo as a submodule named `jupyter` inside a larger GitHub Pages repo, so the paths end up like `https://<my-site>/jupyter/lite`)

### Install requirements
Within a GitHub Pages site directory:
```bash
pip install jupyterlite jupyterlab
```

- `jupyterlite` is the main library; builds a static bundle that mimics the Jupyter server
- `jupyterlab` is required for example notebooks in `content` to be indexed and included in the bundle (in `api/contents/all.json`; see [this jupyterlite#318 comment](https://github.com/jupyterlite/jupyterlite/issues/318#issuecomment-945492049))

### Build the bundle

```bash
jupyter lite build --contents content --output-dir lite
```

- include notebooks from the `content` dir
- output built files into the `lite` dir

(these directory names can be whatever you like)

### Commit / Deploy built bundle
```bash
git add lite
git commit -m "Check in built jupyterlite bundle"
```

## Deploy as a submodule within a GitHub Pages repo
```bash
git submodule add https://github.com/runsascoded/jupyterlite-build.git jupyter
tree jupyter
```
```text
jupyter
├── README.md
├── content  # put example notebooks here
│   └── plotly-test.ipynb
└── requirements.txt
```

Build the bundle:
```bash
cd jupyter  # enter repo

# Two requirements:
# - `jupyterlite`: required to build the bundle
# - `jupyterlab` is required for example notebooks in `content` to be indexed and included in the bundle
pip install -r requirements.txt

# Build the static bundle, including notebooks from the `content` dir, into the `lite` dir (these names can be changed, if you like)
jupyter lite build --contents content --output-dir lite

git add lite
git commit -m "Check in built Jupyterlite bundle"
git push
```
