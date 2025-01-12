import { UserCardProps } from '../../interfaces'

const UserCard = ({ user }: UserCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {user.name}
                </h2>
                <p className="text-gray-600 mb-4">
                    {user.email}
                </p>
                <div className="border-t pt-4">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Address:</h3>
                    <p className="text-gray-600">
                        {user.address.street}<br />
                        {user.address.city}<br />
                        {user.address.zipcode}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserCard;