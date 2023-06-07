import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { Dialog, DialogContent, DialogActions, TextField } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';
import StarIcon from '@mui/icons-material/Star';
import DateRangeIcon from '@mui/icons-material/DateRange';


const ShowSummary = ({ show, onBackClick }) => {


    const { state } = useLocation()
    const [data, setData] = useState(state[0]);
    console.log(data)

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [ticketData, setTicketData] = useState('');

    const handleTicket = () => {
        setIsFormOpen(true);
    }

    const handleFormClose = () => {
        setIsFormOpen(false);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        alert("proceeding to payment.......");
        // Close the form
        setIsFormOpen(false);
    };

    const handleInputChange = (e) => {
        setTicketData(e.target.value);
    };


    return (
        <Box className="ShowSummary" marginTop="3%">
            <Stack direction="row" spacing={0} sx={{ width: "90%", marginLeft: "auto", marginRight: "auto" }} >
                {/*left*/}
                <Box width="35%"  >
                    <img
                        src={data.show.image.original}
                        height="100%"
                        width="90%"
                        alt=""
                        style={{ marginTop: "1%", borderRadius: '20%' }}
                    />
                </Box>






                <Box width="65%" >
                    <Stack spacing={4}>
                        <Paper elevation={0} ><Typography variant="h3">{data.show.name}</Typography></Paper>
                        <Paper elevation={0}> <Typography variant="h4">
                            <Stack direction='row' spacing={1}>
                                <StarIcon style={{ color: 'red' }} />
                                {data.show.rating.average}/10
                            </Stack></Typography></Paper>
                        <Paper elevation={0}>


                            <Stack direction='row' spacing={2}>


                                {data.show.genres.map((img) =>

                                    <Chip variant="outlined" color="secondary" label={img} />
                                )}

                            </Stack>


                        </Paper>
                        <Paper elevation={0} sx={{ paddingBottom: 2 }}>
                            <Stack direction="row" spacing={3} >
                                {/* <Icon name="phone" />   */}
                                <Typography >
                                    <Stack direction="row" spacing={1}>
                                        <AccessTimeIcon />
                                        {data.show.averageRuntime} MIN</Stack></Typography>
                                <Typography >
                                    <Stack direction="row" spacing={1}>
                                        <LanguageIcon />
                                        {data.show.language}

                                    </Stack>
                                </Typography>

                                <Typography >
                                    <Stack direction='row' spacing={1}>
                                        <DateRangeIcon fontSize="medium" />
                                        {data.show.premiered}</Stack></Typography>
                            </Stack>

                        </Paper>

                    </Stack>

                    <Box marginTop="3%">
                        <Paper >
                            <Typography paddingBottom="2%" variant='h4' style={{ color: "black", paddingLeft: '25px' }}><b>About the movie</b></Typography>
                            <Typography paddingLeft={3} paddingRight={3} paddingBottom="4%">{data.show.summary} MIN</Typography>
                        </Paper>

                        <Button sx={{ marginTop: 2 }} variant="contained" onClick={handleTicket}>Book Ticket</Button>
                    </Box>



                </Box>





            </Stack>

            {/* Popup Form */}
            <Dialog open={isFormOpen} onClose={handleFormClose}>
                {/* <DialogTitle>Book Ticket</DialogTitle> */}
                <DialogContent sx={{ paddingTop: 3 }}>
                    <form onSubmit={handleFormSubmit}>

                        <Typography variant='h4'>{data.show.name}</Typography>

                        {/* <Typography variant='h5'>Runtime in Mins</Typography> */}
                        <label><b>Date:</b> <input type="date" required /></label>
                        &nbsp;
                        &nbsp;
                        &nbsp;



                        <label>
                            <b>Number of Persons:</b>
                            <input
                                type="number"
                                name='np'
                                min={1}
                                max={6}
                                required

                            />
                        </label>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;

                        <label><b>ShowTime:</b> {data.show.schedule.time}</label>


                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleFormClose}>Cancel</Button>
                    <Button onClick={handleFormSubmit} variant="contained" color="primary">
                        BOOK
                    </Button>
                </DialogActions>
            </Dialog>


        </Box>
    );
};


export default ShowSummary;


