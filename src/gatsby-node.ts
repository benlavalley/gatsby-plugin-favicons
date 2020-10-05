import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import { CreateWebpackConfigArgs } from 'gatsby';
import { is } from 'superstruct';
import { Options, OptionsStruct } from './options';

export const onCreateWebpackConfig = (
  { actions, reporter }: CreateWebpackConfigArgs,
  options: Options
): void => {
  if (!is(options, OptionsStruct)) {
    return reporter.panic('Invalid or missing options, please refer to the documentation');
  }

  const { logo, ...rest } = options;

  actions.setWebpackConfig({
    plugins: [
      new FaviconsWebpackPlugin({
        inject: false,
        prefix: 'favicons/',
        logo,
        favicons: {
          ...rest
        }
      })
    ]
  });
};
