import { render, fireEvent, cleanup, act, waitFor } from '@testing-library/react';
import Searchbar from '../components/Searchbar';

describe('Searchbar', () => {

    const useRouter = jest.spyOn(require('next/router'), 'useRouter')

    afterEach(() => {
        cleanup();
    })

    it('Should render an input', () => {
        const { container } = render(<Searchbar />)
        const input = container.querySelector('input')
        expect(input).toBeDefined();
    });

    it('Should set the value of the searchbar input from query param', () => {
        const someQuery = 'someQuery';
        useRouter.mockImplementation(() => ({
            query: { q: someQuery },
        }));

        const { container } = render(<Searchbar />)
        expect(container.querySelector('input')?.value).toBe(someQuery);
    })


    it('Should set new url when querying a new search', async () => {
        const someQuery = 'someQuery';
        const mockedPush = jest.fn();

        useRouter.mockImplementation(() => ({
            query: {},
            'push': mockedPush
        }));

        const { container } = render(<Searchbar />)
        const input = container.querySelector('input');
        expect(input).not.toBeNull();
        input?.focus();
        fireEvent.click(input!);
        fireEvent.keyDown(container, { key: 'Enter' });
        expect(mockedPush).not.toBeCalled();
        await waitFor(() => {
            fireEvent.change(input!, { target: { value: someQuery } });
        })
        fireEvent.keyDown(input!, { key: 'Enter' });
        expect(mockedPush).toBeCalledWith(`/search?q=${someQuery}`);
    })
});

