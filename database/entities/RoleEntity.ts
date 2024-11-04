

interface RoleEntity {
    id: Number,
    isActive: Boolean,
    updatedAt: Date,
    deletedAt: Date,
    name: String,
    users: UserEntity[]
}



