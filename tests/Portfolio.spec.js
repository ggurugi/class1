import { mount } from '@vue/test-utils';
import Portfolio from '../src/components/Portfolio.vue';

describe('Portfolio.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(Portfolio);
    expect(wrapper.find('h1').text()).toBe('김디자인 (Kim Design)');
    expect(wrapper.findAll('.project-card').length).toBeGreaterThan(0);
  });
});
