import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { FiSettings } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { AiOutlineBell } from "react-icons/ai";
import { Avatar, Button, Card, CardActions, CardContent, Grid, Stack } from '@mui/material';
import { LineBarChart } from './LineBarChart';
import { DataGrid } from '@mui/x-data-grid';
import { UploadContentProvider, useUploadContext } from './store/ContextData';
import NewMemberList from './NewMemberList';
import CircleChart from './CircleChart';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <UploadContentProvider>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" sx={{ background: '#fff' }}>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2 }}
                            >
                                <img src='logo.png' />
                            </IconButton>
                            <Search sx={{ backgroundColor: 'rgb(250, 250, 251)', color: '#455560;' }} aria-disabled>
                                <SearchIconWrapper >
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                            <Box sx={{ flexGrow: 1 }} />
                            <Grid >
                                <SettingsIcon sx={{color:'black'}} />
                                <LanguageIcon sx={{color:'black'}}/>
                                <NotificationImportantIcon sx={{color:'black'}}/>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Box>
                {/* 1st container */}
                <Grid container display={'flex'} spacing={2} pt={4} rowGap={4}>
                    <Grid item md={8} lg={8} display={'flex'} justifyContent={'space-around'} alignItems={'center'} pt={2}>
                        {/* <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} > */}
                        <Box>
                            <Card >
                                <CardContent >
                                    <Typography variant="h5">
                                        Revenue
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: '22px',
                                        fontWeight: 700,
                                        color: 'black',
                                        padding: '10px 0px'
                                    }}>
                                        $2,454
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        compare to last year(2019)
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box>
                            <Card >
                                <CardContent>
                                    <Typography variant="h5">
                                        Sales
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: '22px',
                                        fontWeight: 700,
                                        color: 'black',
                                        padding: '10px 0px'
                                    }}>
                                        $6,982
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Compare to last year (2019)
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Costs
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: '22px',
                                        fontWeight: 700,
                                        color: 'black',
                                        padding: '10px 0px'
                                    }}>
                                        $ 8,310
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Compare to last year (2019)
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        {/* </Stack> */}
                    </Grid>
                    <Grid item md={4} lg={4} pt={2}>
                        <Card>
                            <Typography sx={{
                                fontSize: '21px',
                                padding: '20px',
                                fontWeight: 700
                            }}>Monthly Target</Typography>
                            <CardContent>
                                {/* <CircleChart /> */}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={8} lg={8} >
                        <Card>
                            <LineBarChart />
                        </Card>
                    </Grid>
                </Grid>
                <Grid container pt={4} display='flex' justifyContent={'space-around'} rowGap={2}>
                    <Grid item md={4} lg={4}>
                        <NewMemberList newMemList={newMember} />
                    </Grid>
                    <Grid item md={6} lg={6}>
                        <Card>
                            <Typography sx={{
                                fontSize: '21px',
                                padding: '20px',
                                fontWeight: 700
                            }}>Latest Transitions</Typography>
                            <CardContent>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}

                                />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </UploadContentProvider >
        </>
    );
}


const newMember = [
    {
        name: 'Terrance Moreno',
        role: 'Software Engineer'
    },
    {
        name: 'Ron Vargas',
        role: 'UI/UX Designer'
    },
    {
        name: 'Luke Cook',
        role: 'HR Executive'
    },
    {
        name: 'Joyce Freeman',
        role: 'Frontend Developer'
    },
    {
        name: 'Samantha Phillips',
        role: 'Compliance Manager'
    }
]

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Customer', headerName: 'Customer', width: 120 },
    { field: 'Date', headerName: 'Date ', width: 190 },
    { field: 'Amount', headerName: 'Amount', width: 100 },
    {
        field: "action",
        headerName: "Action",
        sortable: false,
        renderCell: (params) => {
            const onClick = (e) => {
                e.stopPropagation(); // don't select this row after clicking

                const api: GridApi = params.api;
                const thisRow: Record<string, GridCellValue> = {};

                api
                    .getAllColumns()
                    .filter((c) => c.field !== "__check__" && !!c)
                    .forEach(
                        (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
                    );

                return alert(JSON.stringify(thisRow, null, 4));
            };

            return <Button variant='outlined' sx={{
                fontSize: '10px',
                color: '#08979c',
                background: '#e6fffb',
                borderColor: '#87e8de'
            }} onClick={onClick}>Approved</Button>;
        }
    },
];

const rows = [
    { id: 1, Customer: 'Snow Jon', Date: '8 May 2020', Amount: '$133.00' },
    { id: 2, Customer: 'Lannister Cersei', Date: '6 May 2020', Amount: '$134.00' },
    { id: 3, Customer: 'Stark  Arya', Date: '28 May 2020', Amount: '$199.00' },
    { id: 4, Customer: 'Targaryen Daenerys', Date: '23 April 2022', Amount: '$100.00' },
    { id: 5, Customer: 'Melisandre ', Date: '28 April 2022', Amount: '$200.00' },
    { id: 6, Customer: 'Clifford Ferrara', Date: '10 March 2022', Amount: '$455.00' },
];
