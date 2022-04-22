import { PanelPlugin } from '@grafana/data';
import { loadPluginCss } from '@grafana/runtime';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

loadPluginCss({
  dark: 'plugins/heywesty-plugin-yarn-berry/styles/dark.css',
  light: 'plugins/heywesty-plugin-yarn-berry/styles/light.css',
});

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'text',
      name: 'Simple text option',
      description: 'Description of panel option',
      defaultValue: 'Default value of text input option',
    })
    .addBooleanSwitch({
      path: 'showSeriesCount',
      name: 'Show series counter',
      defaultValue: false,
    })
    .addRadio({
      path: 'seriesCountSize',
      defaultValue: 'sm',
      name: 'Series counter size',
      settings: {
        options: [
          {
            value: 'sm',
            label: 'Small',
          },
          {
            value: 'md',
            label: 'Medium',
          },
          {
            value: 'lg',
            label: 'Large',
          },
        ],
      },
      showIf: (config) => config.showSeriesCount,
    });
});
