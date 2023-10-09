import jwt from 'jsonwebtoken'
export function tokenCreate(playload) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            playload,
            "secreto", {
            expiresIn: "1d",
        },
            (err, token) => {
                if (err) reject(err)
                resolve (token)
        }
        )
    })
    
}