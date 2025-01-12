import { type CardProps } from '../../interfaces'

const Card = ({ title, content }: CardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {title}
                </h2>
                <p className="text-gray-600">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default Card;