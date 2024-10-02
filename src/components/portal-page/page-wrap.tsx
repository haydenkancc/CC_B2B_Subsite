import {ReactNode} from 'react';

interface PageWrapProps {
    children: ReactNode;
}
function PageWrap({ children } : PageWrapProps) {
    return (
        <div className="flex justify-center">
            <div className="max-w-[1440px] flex-grow pl-4 pt-4">
                {children}
            </div>
        </div>
    )
}

export default PageWrap;