import ru from 'vuetify/es5/locale/ru'

export default function ({ app }) {
  return {
    font: false,
    icons: {
      iconfont: 'fa',
      values: {
        cancel: "fal fa-times-circle",
        checkboxIndeterminate: "fas fa-minus-circle",
        checkboxOff: "fal fa-circle",
        checkboxOn: "fas fa-check-circle",
        clear: "fal fa-times",
        close: "fal fa-times",
        complete: "fal fa-check",
        delete: "fal fa-times",
        delimiter: "fal fa-circle",
        dropdown: "fal fa-angle-down",
        edit: "fal fa-edit",
        error: "fal fa-exclamation-triangle",
        expand: "fal fa-angle-down",
        file: "fal fa-paperclip",
        first: "fal fa-step-backward",
        info: "fal fa-info-circle",
        last: "fal fa-step-forward",
        loading: "fal fa-sync",
        menu: "fal fa-bars",
        minus: "fal fa-minus",
        next: "fal fa-chevron-right",
        plus: "fal fa-plus",
        prev: "fal fa-chevron-left",
        radioOff: "fal fa-circle",
        radioOn: "fas fa-check-circle",
        ratingEmpty: "fal fa-star",
        ratingFull: "fal fa-star",
        ratingHalf: "fal fa-star-half",
        sort: "fal fa-sort-up",
        subgroup: "fal fa-angle-down",
        success: "fal fa-check-circle",
        unfold: "fal fa-arrows-alt-v",
        warning: "fal fa-exclamation"
      }
    },
    theme: { disable: true },
    options: {
      themeCache: {
        get: () => ''
      }
    },
    lang: {
      locales: { ru },
      current: 'ru'
    }
  }
}
