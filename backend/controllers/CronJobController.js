import AddGroup from '../models/addGroup';
import cron from 'cron';
const CronJob = cron.CronJob;

const deleteExpiredGroups = async () => {
    try {
        const currentDate = new Date();
        const expiredGroups = await AddGroup.find({ expirationDate: { $lte: currentDate } });
        console.log(`Found ${expiredGroups.length} expired groups to delete.`);

        for (const group of expiredGroups) {
            await AddGroup.findByIdAndDelete(group._id);
            console.log(`Deleted expired group '${group.groupName}' (${group._id})`);
        }
    } catch (error) {
        console.error('Error during deleting expired groups:', error);
    }
};


// Run the cron job every minute
const job = new CronJob('* * * * *', function() {
    console.log('Running deleteExpiredGroups at:', new Date());
    deleteExpiredGroups();
});
job.start();
