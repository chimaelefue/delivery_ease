import { useGetUserQuery } from "@/api/apiSlice";

const ProfilePage = () => {
    const { data } = useGetUserQuery()
  return (
    <>
        <div className="my-8">
            <div> 
                <p className="font-bold text-xl">Profile</p> 
                <p className="text-[#667085]">Update your photo and personal details here.</p>
            </div>
        </div>

        <div>
            <div className='flex justify-end'>
                <p className='text-[#6941C6]'></p>
            </div>

            <div className='space-y-8'>
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="basis-3/12">
                        <p>Your photo</p>
                        <p className='text-[#667085]'>This will be displayed on your profile.</p>
                    </div>

                    <div className="flex basis-9/12 p-4 rounded-lg">
                        <img
                            src={`https://deliver.door-steps.pro/storage/${data?.data?.item?.photo}`}
                            alt="Profile Picture"
                            className="h-24 w-24 rounded-full"
                        />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <div className="lg:basis-3/12 mb-4 lg:mb-0">
                        Name:
                    </div>

                    <div className="flex basis-9/12 bg-white p-4 rounded-lg">
                        {data?.data?.item?.first_name} {data?.data?.item?.last_name}
                    </div>
                </div>

                <div className="w-full border my-4"></div>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <div className="basis-3/12 mb-4 lg:mb-0">
                        Email:
                    </div>

                    <div className="flex basis-9/12 bg-white p-4 rounded-lg">
                        {data?.data?.item?.email}
                    </div>
                </div>

                <div className="w-full border my-4"></div>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <div className="basis-3/12 mb-4 lg:mb-0">
                        Occupation:
                    </div>

                    <div className="flex basis-9/12 bg-white p-4 rounded-lg">
                        {data?.data?.item?.occupation}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProfilePage