const path = require('path')
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['reusecore', 'common']);
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');

// To add new modules, nest the function (like a HOC in React)
module.exports = withPlugins(
  [
    [withTM],
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 90,
        },
        webp: {
          preset: 'default',
          quality: 90,
        },
      },
    ],
    withFonts,
    withCSS({
      // distDir: '../../dist/functions/next',
      webpack(config, options) {
        config.module.rules.push({
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        })
        // Here is the magic
        // We push our config into the resolve.modules array
        config.resolve.modules.push(path.resolve('./'))
        return config
      }
    }),
  ],
);

// module.exports = withPlugins(
//   [
//     [withTM],
//     [
//       withOptimizedImages,
//       {
//         mozjpeg: {
//           quality: 90,
//         },
//         webp: {
//           preset: 'default',
//           quality: 90,
//         },
//       },
//     ],
//     withFonts,
//     withCSS,
//   ],
//   {
//     // distDir: '../../dist/functions/next',
//     webpack(config, options) {
//       config.module.rules.push({
//         test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//         use: {
//           loader: 'url-loader',
//           options: {
//             limit: 100000
//           }
//         }
//       })
//       // Here is the magic
//       // We push our config into the resolve.modules array
//       config.resolve.modules.push(path.resolve('./'))
//       return config
//     }
//   }
// );