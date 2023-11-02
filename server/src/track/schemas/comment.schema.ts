import mongoose, { HydratedDocument, ObjectId, Types } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Track } from './track.schema'

export type CommentDocument = HydratedDocument<Comment>

@Schema()
export class Comment {
	// _id: ObjectId

	@Prop()
	username: string

	@Prop()
	text: string

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Track' })
	track: Track
}

export const CommentSchema = SchemaFactory.createForClass(Comment)
