import Router from "express";
import meetupController from "../controller/meetupController";
const router = new Router();

router.get("/meetup", meetupController.getMeetup);
router.get("/meetup/:id", meetupController.getOneMeetup);
router.post("/meetup", meetupController.postMeetup);
router.put("/meetup/:id", meetupController.putMeetup);
router.delete("/meetup/:id", meetupController.deleteMeetup);
