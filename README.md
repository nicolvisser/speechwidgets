
# speechwidgets

Jupyter widgets for speech processing

- **`SpectrogramPlayer`**
  - Based on the React component, [react-audio-spectrogram-player](https://github.com/nicolvisser/react-audio-spectrogram-player). See the [demo](https://react-audio-spectrogram-player.netlify.app).
  
![preview](./preview.png)

## Installation

You can install using `pip`:

```bash
pip install speechwidgets
```

If you are using Jupyter Notebook 5.2 or earlier, you may also need to enable
the nbextension:
```bash
jupyter nbextension enable --py [--sys-prefix|--user|--system] speechwidgets
```

## Usage

```py
from speechwidgets import SpectrogramPlayer
```
### Basic usage:
```py
SpectrogramPlayer(
    wav_file_path='./19-198-0001.wav',
    width=800,
    spec_height=200,
    navigator=True,
    nav_height=60,
)
```
### Advanced usage:
```py
SpectrogramPlayer(
    wav_file_path='./19-198-0001.wav',
    width=800,
    spec_height=200,
    navigator=False,
    settings=False,
    colormap="greys",

    # for dark mode notebooks:
    dark=False, # set to True
    transparent=False, # optionally set to True
    
    # mel spec parameters:
    n_fft=2048,
    win_length=400,
    hop_length=160,
    f_min=50, 
    n_mels=80,
    power=1.0,
    
    # amplitude to db parameter:
    top_db=80 
)
```
### Annotations:
```py
word_intervals = [['0.54', '0.84', 'this'],
        ['0.84', '1.1', 'little'],
        ['1.1', '1.4', 'work']]
```
```py
s = SpectrogramPlayer(
    wav_file_path='./19-198-0001.wav',
    width=800,
    spec_height=200
)
```
```py
s.annotate(data=word_intervals, title="Word Intervals", height=20, stroke_width=0.5)
```
You can call the `annotate` method  multiple times with different data. `title`, `height` and `stroke_width` are optional arguments.

See `examples/` folder on github for full code examples.

## Development Installation

Create a dev environment:
```bash
conda create -n speechwidgets-dev -c conda-forge nodejs python=3.10 jupyterlab
conda activate speechwidgets-dev
```

Install the python dependencies. This will also build the TS package.
```bash
pip install -e ".[test, examples]"
```

When developing your extensions, you need to manually enable your extensions with the
notebook / lab frontend. For lab, this is done by the command:

```
jupyter labextension develop --overwrite .
npm install
npm run build
```

For classic notebook, you need to run:

```
jupyter nbextension install --sys-prefix --symlink --overwrite --py speechwidgets
jupyter nbextension enable --sys-prefix --py speechwidgets
```

Note that the `--symlink` flag doesn't work on Windows, so you will here have to run
the `install` command every time that you rebuild your extension. For certain installations
you might also need another flag instead of `--sys-prefix`, but we won't cover the meaning
of those flags here.

### How to see your changes
#### Typescript:
If you use JupyterLab to develop then you can watch the source directory and run JupyterLab at the same time in different
terminals to watch for changes in the extension's source and automatically rebuild the widget.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
npm run watch
# Run JupyterLab in another terminal
jupyter lab
```

After a change wait for the build to finish and then refresh your browser and the changes should take effect.

#### Python:
If you make a change to the python code then you will need to restart the notebook kernel to have it take effect.
