import useMedia from "react-use/lib/useMedia";

function useMobile() {
    return useMedia('(max-width: 480px)', false);
}

export default useMobile;