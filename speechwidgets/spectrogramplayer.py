#!/usr/bin/env python
# coding: utf-8

# Copyright (c) nicolvisser.
# Distributed under the terms of the Modified BSD License.

"""
TODO: Add module docstring
"""

from ipywidgets import DOMWidget
from traitlets import Unicode, Int, Bool
from ._frontend import module_name, module_version
from traittypes import Array

#TODO: Perform mel spectrogram calculation here and make sxx optional

class SpectrogramPlayer(DOMWidget):
    """TODO: Add docstring here
    """
    _model_name = Unicode('SpectrogramPlayerModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('SpectrogramPlayerView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    src = Unicode('blank').tag(sync=True)
    sxx = Array([[1.0,0.0],[0.0,1.0]], help="The 2D array of spectrogram values").tag(sync=True)
    width = Int(900).tag(sync=True)
    spec_height = Int(300).tag(sync=True)
    nav_height = Int(50).tag(sync=True)
    navigator = Bool(True).tag(sync=True)
    settings = Bool(True).tag(sync=True)
    colormap = Unicode('viridis').tag(sync=True)
    transparent = Bool(False).tag(sync=True)
    dark = Bool(False).tag(sync=True)
