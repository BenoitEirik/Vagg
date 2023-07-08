import { presetAnu, presetIconExtraProperties } from 'anu-vue'
import { presetThemeDefault } from '@anu-vue/preset-theme-default'
import {
  defineConfig,
  presetIcons,
  presetUno,
  presetTypography
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: presetIconExtraProperties,
    }),

    // anu-vue preset
    presetAnu({
      colors: ['secondary'],
    }),

    // default theme preset
    presetThemeDefault(),

    presetTypography(),
  ],
  include: [/.*\/anu-vue\.js(.*)?$/, './**/*.vue', './**/*.md'],
})