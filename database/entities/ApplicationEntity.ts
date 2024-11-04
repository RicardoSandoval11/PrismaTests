

interface ApplicationEntity {
    id: Number,
    isActive: Boolean,
    updatedAt: Date,
    deletedAt: Date | null,
    incidentId: Number | null,
    crmProcessId: Number | null,
    expirationAt: Date,
    phoneNumberHash: String | null,
    uuid: String | undefined,
    userId: Number,
    user: UserEntity
}