import { PostCardProps } from '../../interfaces'

const PostCard = ({ title, content, userId }: PostCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {title}
                    </h2>
                    <span className="text-sm text-gray-500">
                        User ID: {userId}
                    </span>
                </div>
                <p className="text-gray-600">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default PostCard;