
import { render } from '@testing-library/react';
import PageContainer from '../components/PageContainer';

describe('PageContainer', () => {
    it('Should render components', async () => {
        const { container } = render(<PageContainer />)
        const footer = container.querySelector('footer')
        const main = container.querySelector('main')
        const searchInput = container.querySelector('input');
        expect(footer).not.toBeNull();
        expect(main).not.toBeNull();
        expect(searchInput).not.toBeNull();
    });
});
