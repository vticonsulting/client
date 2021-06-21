import {shallowMount} from '@vue/test-utils'
import Demo from '@/views/demo.vue'

describe('Demo.vue', function () {
  it('Displays a message when escape is pressed', function () {
    const wrapper = shallowMount(Demo, {attachTo: document.body})

    // the browser will add 'key' to the event,
    // but when testing we need to add it manually
    wrapper.trigger('keydown.esc', {key: 'Escape'})

    expect(wrapper.text()).to.include('Escape has been pressed')

    // always make sure to destroy when using attachToDocument
    wrapper.destroy()
  })
})
