import React from 'react';
import { WidgetModel } from '@jupyter-widgets/base';
import { useModelState, WidgetModelContext } from './hooks/widget-model';
import SpectrogramPlayer from "react-audio-spectrogram-player";

interface WidgetProps {
  model: WidgetModel;
}

function ReactWidget(props: WidgetProps) {
  const [src] = useModelState('src');
  const [sxx] = useModelState('sxx');
  const [width] = useModelState('width');
  const [specHeight] = useModelState('spec_height');
  const [navHeight] = useModelState('nav_height');
  const [navigator] = useModelState('navigator');
  const [settings] = useModelState('settings');
  const [colormap] = useModelState('colormap');
  const [transparent] = useModelState('transparent');
  const [dark] = useModelState('dark');
  const [annotations] = useModelState('annotations');
  const [annotations2] = useModelState('annotations2');
  const [annotationAspectRatio] = useModelState('annotation_aspect_ratio');
  const [annotationStrokeWidth] = useModelState('annotation_stroke_width');

  return (
    <div className="Widget" style={{ width: width }}>
      <SpectrogramPlayer
        src={src}
        sxx={sxx}
        specHeight={specHeight}
        navHeight={navHeight}
        navigator={navigator}
        settings={settings}
        colormap={colormap}
        transparent={transparent}
        dark={dark}
        annotations={annotations[0].length ==0 ? undefined : annotations}
        annotations2={annotations2[0].length ==0 ? undefined : annotations2}
        annotationAspectRatio={annotationAspectRatio}
        annotationStrokeWidth={annotationStrokeWidth}
      />
    </div>
  );
}

function withModelContext(Component: (props: WidgetProps) => JSX.Element) {
  return (props: WidgetProps) => (
    <WidgetModelContext.Provider value={props.model}>
      <Component {...props} />
    </WidgetModelContext.Provider>
  );
}

export default withModelContext(ReactWidget);
