

interface UserEntity {
    isActive: boolean,
    updatedAt: Date,
    deletedAt: Date,
    id: Number,
    username: String,
    usernameHash: String,
    emailHash: String,
    sub: String,
    roleId: Number,
    role: RoleEntity,
    applications: ApplicationEntity[]
}