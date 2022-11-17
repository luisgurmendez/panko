import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useEvent } from 'react-use';
import { useRouter } from "next/router";
import { Input } from './Input/Input';

const Searchbar = () => {
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement | null>(null);
    const router = useRouter()

    useSubmitOnEnter(inputRef.current)

    const handleValueChange = useCallback((ev: ChangeEvent) => {
        setQuery((ev.target as any).value);
    }, []);

    useEffect(() => {
        if (router.query.q !== undefined) {
            setQuery(router.query.q as string);
        }
    }, [router.query])

    return (
        <Input
            autoComplete='off'
            ref={inputRef}
            value={query}
            onChange={handleValueChange}
            className="w-full h-full pl-1 text-sm focus:outline-none flex flex-row items-center"
            name="search"
            placeholder="Buscá"
            leading={<MagnifyingGlassIcon className="text-gray-600 h-5 w-5 fill-current" />}
            animateOnFocus
        />
    )
}

export default Searchbar;

function useSubmitOnEnter(inputRef: HTMLInputElement | null) {
    const router = useRouter();

    const handleKeyDown = (ev: Event) => {
        if (document.activeElement === inputRef) {
            if (isKeyboardEvent(ev))
                if (ev.key === 'Enter' && inputRef?.value) {
                    router.push(`/search?q=${inputRef?.value}`)
                }
        }
    }

    useEvent('keydown', handleKeyDown, inputRef);
}

function isKeyboardEvent(ev: any): ev is KeyboardEvent {
    return ev.key !== undefined;
}
