import {shallowMount} from '@vue/test-utils'
import KeyboardShortcut from '@/components/KeyboardShortcut.vue'

describe('KeyboardShortcut.vue', function () {
  it('Displays a message when escape is pressed', function () {
    const wrapper = shallowMount(KeyboardShortcut, {attachTo: document.body})

    // the browser will add 'key' to the event,
    // but when testing we need to add it manually
    wrapper.trigger('keydown.esc', {key: 'Escape'})

    expect(wrapper.text()).to.include('Escape has been pressed')

    // always make sure to destroy when using attachToDocument
    wrapper.destroy()
  })
})
