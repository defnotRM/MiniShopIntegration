import { useState } from 'react'
import { UserIcon, MailIcon, IdCardIcon, CartIcon, PackageIcon, StarIcon, CloseIcon } from './Icons'

export default function Profile() {
  const [profile, setProfile] = useState({
    name: 'Alex Student',
    email: 'alex@email.com',
    studentId: '6501234567'
  })

  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({ ...profile })

  const handleSave = (e) => {
    e.preventDefault()
    setProfile({ ...editForm })
    setIsEditing(false)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Profile</h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-5 bg-white rounded-2xl border border-gray-100 shadow-xs p-8 text-center">
          <div className="w-24 h-24 rounded-full bg-blue-100 text-blue-600 mx-auto flex items-center justify-center shadow-inner">
            <UserIcon className="w-12 h-12 text-blue-600" />
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-5">{profile.name}</h3>

          <div className="mt-4 space-y-2 text-sm text-gray-500">
            <p className="flex items-center justify-center gap-2">
              <MailIcon className="w-4 h-4 text-gray-400" />
              <span>{profile.email}</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <IdCardIcon className="w-4 h-4 text-gray-400" />
              <span>Student ID: {profile.studentId}</span>
            </p>
          </div>

          <button
            onClick={() => {
              setEditForm({ ...profile })
              setIsEditing(true)
            }}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors shadow-xs"
          >
            Edit Profile
          </button>
        </div>

        <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 shadow-xs p-8">
          <h3 className="text-base font-bold text-gray-800 mb-6">Account Summary</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-5">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                <CartIcon className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-xs font-semibold text-gray-500 mt-3">Total Orders</p>
              <h4 className="text-2xl font-extrabold text-gray-900 mt-1">128</h4>
            </div>

            <div className="bg-purple-50/70 border border-purple-100 rounded-2xl p-5">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                <span className="font-extrabold text-lg">฿</span>
              </div>
              <p className="text-xs font-semibold text-gray-500 mt-3">Total Spent</p>
              <h4 className="text-2xl font-extrabold text-purple-700 mt-1">฿48,500</h4>
            </div>

            <div className="bg-green-50/70 border border-green-100 rounded-2xl p-5">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                <PackageIcon className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-xs font-semibold text-gray-500 mt-3">Wishlist Items</p>
              <h4 className="text-2xl font-extrabold text-gray-900 mt-1">6</h4>
            </div>

            <div className="bg-amber-50/70 border border-amber-100 rounded-2xl p-5">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-500">
                <StarIcon className="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <p className="text-xs font-semibold text-gray-500 mt-3">Loyalty Points</p>
              <h4 className="text-2xl font-extrabold text-gray-900 mt-1">320</h4>
            </div>
          </div>
        </div>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h4 className="font-bold text-gray-900 text-lg">Edit Profile</h4>
              <button
                onClick={() => setIsEditing(false)}
                className="text-gray-400 hover:text-gray-700 p-1"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Student ID</label>
                <input
                  type="text"
                  value={editForm.studentId}
                  onChange={(e) => setEditForm({ ...editForm, studentId: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              <div className="pt-3 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 rounded-xl text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl text-sm shadow-xs"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
