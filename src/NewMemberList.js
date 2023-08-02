import { Avatar, Box, Button, Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import { useUploadContext } from './store/ContextData';

const NewMemberList = ({ newMemList }) => {
    const { getContent, setGetContent } = useUploadContext()
    console.log(getContent, "newMm", newMemList);
    return (
        <Card>
            <Typography sx={{
                fontSize: '21px',
                padding: '20px',
                fontWeight: 700
            }}>New Join Member</Typography>
            <CardContent>
                <Stack spacing={3}>
                    {getContent?.splice(0, 6).map((e, i) => {
                        return (
                            <>
                                <Box display={'flex'} justifyContent={'space-between'}>
                                    <Avatar />
                                    <Box display={'flex'} justifyContent={'flex-start'} flexDirection={'column'} alignItems={'flex-start'}>
                                        <Typography sx={{ color: 'black', fontWeight: '600' }}>{e.name}</Typography>
                                        <Typography>{e.role}</Typography>
                                    </Box>
                                    <Button variant='outlined'>Add</Button>
                                </Box>
                            </>
                        )
                    })}
                </Stack>
            </CardContent>
        </Card>
    )
}

export default NewMemberList