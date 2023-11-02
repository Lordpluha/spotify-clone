import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { HydratedDocument, ObjectId, Types } from 'mongoose'
import { Comment } from './comment.schema'


export type TrackDocument = HydratedDocument<Track>


@Schema()
export class Track {
	// @Prop({type: mongoose.Schema.Types.ObjectId})
	_id: ObjectId

	@Prop()
	name: string

	@Prop()
	artist: string

	@Prop()
	text: string

	@Prop()
	listens: number

	@Prop()
	picture: string

	@Prop()
	audio: string

	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
	comments: Comment[]
}


export const TrackSchema = SchemaFactory.createForClass(Track)
