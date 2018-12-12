import { mount } from '@vue/test-utils';
import Alert from 'inkline/components/Alert';

describe('Components', () => {
    describe('Alert', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = mount(Alert);
        });

        test('should render correctly', () => {
            expect(wrapper.html()).toMatchSnapshot();
        });
    });
});