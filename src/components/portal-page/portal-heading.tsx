import {ReactNode} from 'react';


interface PortalHeadingProps {
    heading: string;
    subheading: string | ReactNode
}
function PortalHeading({ heading, subheading } : PortalHeadingProps) {
    return (
        <div className="pt-8 pb-16">
            <div className="text-4xl pb-2">
                {heading}
            </div>
            <div>
                {subheading}
            </div>
        </div>
    )
}

export default PortalHeading;