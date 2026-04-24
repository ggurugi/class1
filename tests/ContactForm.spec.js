import { mount } from '@vue/test-utils';
import ContactForm from '../src/components/ContactForm.vue';

describe('ContactForm.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(ContactForm);
    expect(wrapper.find('h2').text()).toBe('문의하기');
    expect(wrapper.find('form').exists()).toBe(true);
  });
});
