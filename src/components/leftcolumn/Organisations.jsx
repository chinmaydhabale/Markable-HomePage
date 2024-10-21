import React, { useState } from 'react'
import { FiSettings } from 'react-icons/fi'

const Organisations = () => {

    const organisationlist = [{
        id: 1,
        name: "OpenAi",
        image: "https://scontent.fnag4-1.fna.fbcdn.net/v/t39.30808-6/362291218_778958160692463_4488585172297481993_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=y7q7D62gtt4Q7kNvgFu0ywI&_nc_ht=scontent.fnag4-1.fna&_nc_gid=AGil1nvNZPEtT9isJrWgmbn&oh=00_AYAb2syXjxdl6HRGoCPGggC48eNA_YPTyIJL0uKk9Y2TtA&oe=671BEC6A",
        Admin: true
    },
    {
        id: 2,
        name: "Google",
        image: "https://scontent.fnag4-2.fna.fbcdn.net/v/t39.30808-6/461318528_1057199622436993_2429427774568686653_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=x93Aqly079AQ7kNvgEuZ8Ky&_nc_ht=scontent.fnag4-2.fna&_nc_gid=AILgkNBt-aj2GYTChlw_fvt&oh=00_AYCZleLVDueRBUatUZEvJyRgOhkSe_OFdBVpgEYUz0ZSrw&oe=671BD716",
        Admin: false
    },
    {
        id: 3,
        name: "Meta",
        image: "https://scontent.fnag4-2.fna.fbcdn.net/v/t39.30808-6/399135781_650269627287248_3982756294598700712_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_8PbYNF30ZkQ7kNvgGpl47I&_nc_ht=scontent.fnag4-2.fna&_nc_gid=AtD8A6syzng8U618FjSpJux&oh=00_AYBxmmJ92AHq-pf9mr9Yk6C0MkPglNUYq_8vKYy-xNfg9w&oe=671BE3F0",
        Admin: true
    }
    ]

    const [showAll, setShowAll] = useState(false);

    const handleShowMore = () => {
        setShowAll(!showAll);
    }

    const visibleOrganisations = showAll ? organisationlist : organisationlist.slice(0, 2);

    return (
        <div>
            <h1 className="text-xl font-bold m-4">Organisations</h1>
            {visibleOrganisations.map((organisation) => (
                <div key={organisation.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src={organisation.image}
                            alt={organisation.name}
                            className="w-20 h-20 rounded-full"
                        />
                        <div>
                            <h2 className="text-sm font-medium">{organisation.name}</h2>
                            <p className="text-gray-600 text-sm">{organisation.Admin ? "Admin" : "Member"}</p>
                        </div>
                    </div>
                    <span className="text-gray-600 cursor-pointer">
                        <FiSettings size={20} />
                    </span>
                </div>
            ))}
            {/* show more button and show less button  */}
            <div className="text-blue-500 cursor-pointer text-right mt-4" onClick={handleShowMore}>
                {showAll ? 'Show Less' : 'Show All'}
            </div>
        </div>
    )
}

export default Organisations