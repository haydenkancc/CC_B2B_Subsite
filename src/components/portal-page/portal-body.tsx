import {ReactNode} from 'react';

interface PortalBodyProps {
    children: ReactNode;
}

function PortalBody({ children } : PortalBodyProps) {
    return (
        <div className="bg-lavender/10 text-oxford-blue border-lavender pb-32">
            {children}
        </div>
    )
}

export default PortalBody;