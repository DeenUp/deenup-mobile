/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGameRoundInput = {
	id?: string | null
	index: number
	question: string
	correctAnswer: string
	isComplete: boolean
	gameSessionID: string
	updatedAt?: string | null
	createdAt?: string | null
}

export type ModelGameRoundConditionInput = {
	index?: ModelIntInput | null
	question?: ModelStringInput | null
	correctAnswer?: ModelStringInput | null
	isComplete?: ModelBooleanInput | null
	gameSessionID?: ModelIDInput | null
	updatedAt?: ModelStringInput | null
	createdAt?: ModelStringInput | null
	and?: Array<ModelGameRoundConditionInput | null> | null
	or?: Array<ModelGameRoundConditionInput | null> | null
	not?: ModelGameRoundConditionInput | null
}

export type ModelIntInput = {
	ne?: number | null
	eq?: number | null
	le?: number | null
	lt?: number | null
	ge?: number | null
	gt?: number | null
	between?: Array<number | null> | null
	attributeExists?: boolean | null
	attributeType?: ModelAttributeTypes | null
}

export enum ModelAttributeTypes {
	binary = "binary",
	binarySet = "binarySet",
	bool = "bool",
	list = "list",
	map = "map",
	number = "number",
	numberSet = "numberSet",
	string = "string",
	stringSet = "stringSet",
	_null = "_null",
}

export type ModelStringInput = {
	ne?: string | null
	eq?: string | null
	le?: string | null
	lt?: string | null
	ge?: string | null
	gt?: string | null
	contains?: string | null
	notContains?: string | null
	between?: Array<string | null> | null
	beginsWith?: string | null
	attributeExists?: boolean | null
	attributeType?: ModelAttributeTypes | null
	size?: ModelSizeInput | null
}

export type ModelSizeInput = {
	ne?: number | null
	eq?: number | null
	le?: number | null
	lt?: number | null
	ge?: number | null
	gt?: number | null
	between?: Array<number | null> | null
}

export type ModelBooleanInput = {
	ne?: boolean | null
	eq?: boolean | null
	attributeExists?: boolean | null
	attributeType?: ModelAttributeTypes | null
}

export type ModelIDInput = {
	ne?: string | null
	eq?: string | null
	le?: string | null
	lt?: string | null
	ge?: string | null
	gt?: string | null
	contains?: string | null
	notContains?: string | null
	between?: Array<string | null> | null
	beginsWith?: string | null
	attributeExists?: boolean | null
	attributeType?: ModelAttributeTypes | null
	size?: ModelSizeInput | null
}

export type GameRound = {
	__typename: "GameRound"
	id: string
	index: number
	question: string
	correctAnswer: string
	isComplete: boolean
	submittedAnswers?: ModelSubmittedAnswerConnection | null
	gameSessionID: string
	gameSession: GameSession
	updatedAt: string
	createdAt: string
}

export type ModelSubmittedAnswerConnection = {
	__typename: "ModelSubmittedAnswerConnection"
	items: Array<SubmittedAnswer | null>
	nextToken?: string | null
}

export type SubmittedAnswer = {
	__typename: "SubmittedAnswer"
	id: string
	answer: string
	isCorrect?: boolean | null
	userID: string
	user: User
	gameRoundID: string
	gameRound: GameRound
	gameSessionID: string
	gameSession: GameSession
	updatedAt: string
	createdAt: string
}

export type User = {
	__typename: "User"
	id: string
	email: string
	name: string
	selfie?: string | null
	status?: UserStatus | null
	type?: UserType | null
	isOnline?: boolean | null
	createdLobbies?: ModelLobbyConnection | null
	joinedLobbies?: ModelParticipantConnection | null
	submittedAnswers?: ModelSubmittedAnswerConnection | null
	updatedAt: string
	createdAt: string
}

export enum UserStatus {
	ACTIVE = "ACTIVE",
	SUSPENDED = "SUSPENDED",
}

export enum UserType {
	ADMIN = "ADMIN",
	PLAYER = "PLAYER",
}

export type ModelLobbyConnection = {
	__typename: "ModelLobbyConnection"
	items: Array<Lobby | null>
	nextToken?: string | null
}

export type Lobby = {
	__typename: "Lobby"
	id: string
	code: string
	isActive: boolean
	participants?: ModelParticipantConnection | null
	creatorID: string
	creator: User
	gameSessionID?: string | null
	gameSession?: GameSession | null
	updatedAt: string
	createdAt: string
}

export type ModelParticipantConnection = {
	__typename: "ModelParticipantConnection"
	items: Array<Participant | null>
	nextToken?: string | null
}

export type Participant = {
	__typename: "Participant"
	id: string
	lobbyId: string
	userId: string
	lobby: Lobby
	user: User
	createdAt: string
	updatedAt: string
}

export type GameSession = {
	__typename: "GameSession"
	id: string
	lobbyID: string
	lobby: Lobby
	rounds?: ModelGameRoundConnection | null
	submittedAnswers?: ModelSubmittedAnswerConnection | null
	updatedAt: string
	createdAt: string
}

export type ModelGameRoundConnection = {
	__typename: "ModelGameRoundConnection"
	items: Array<GameRound | null>
	nextToken?: string | null
}

export type UpdateGameRoundInput = {
	id: string
	index?: number | null
	question?: string | null
	correctAnswer?: string | null
	isComplete?: boolean | null
	gameSessionID?: string | null
	updatedAt?: string | null
	createdAt?: string | null
}

export type DeleteGameRoundInput = {
	id: string
}

export type CreateSubmittedAnswerInput = {
	id?: string | null
	answer: string
	isCorrect?: boolean | null
	userID: string
	gameRoundID: string
	gameSessionID: string
	updatedAt?: string | null
	createdAt?: string | null
}

export type ModelSubmittedAnswerConditionInput = {
	answer?: ModelStringInput | null
	isCorrect?: ModelBooleanInput | null
	userID?: ModelIDInput | null
	gameRoundID?: ModelIDInput | null
	gameSessionID?: ModelIDInput | null
	updatedAt?: ModelStringInput | null
	createdAt?: ModelStringInput | null
	and?: Array<ModelSubmittedAnswerConditionInput | null> | null
	or?: Array<ModelSubmittedAnswerConditionInput | null> | null
	not?: ModelSubmittedAnswerConditionInput | null
}

export type UpdateSubmittedAnswerInput = {
	id: string
	answer?: string | null
	isCorrect?: boolean | null
	userID?: string | null
	gameRoundID?: string | null
	gameSessionID?: string | null
	updatedAt?: string | null
	createdAt?: string | null
}

export type DeleteSubmittedAnswerInput = {
	id: string
}

export type CreateGameSessionInput = {
	id?: string | null
	lobbyID: string
	updatedAt?: string | null
	createdAt?: string | null
}

export type ModelGameSessionConditionInput = {
	lobbyID?: ModelIDInput | null
	updatedAt?: ModelStringInput | null
	createdAt?: ModelStringInput | null
	and?: Array<ModelGameSessionConditionInput | null> | null
	or?: Array<ModelGameSessionConditionInput | null> | null
	not?: ModelGameSessionConditionInput | null
}

export type UpdateGameSessionInput = {
	id: string
	lobbyID?: string | null
	updatedAt?: string | null
	createdAt?: string | null
}

export type DeleteGameSessionInput = {
	id: string
}

export type CreateLobbyInput = {
	id?: string | null
	code: string
	isActive: boolean
	creatorID: string
	gameSessionID?: string | null
	updatedAt?: string | null
	createdAt?: string | null
}

export type ModelLobbyConditionInput = {
	code?: ModelStringInput | null
	isActive?: ModelBooleanInput | null
	creatorID?: ModelIDInput | null
	gameSessionID?: ModelIDInput | null
	updatedAt?: ModelStringInput | null
	createdAt?: ModelStringInput | null
	and?: Array<ModelLobbyConditionInput | null> | null
	or?: Array<ModelLobbyConditionInput | null> | null
	not?: ModelLobbyConditionInput | null
}

export type UpdateLobbyInput = {
	id: string
	code?: string | null
	isActive?: boolean | null
	creatorID?: string | null
	gameSessionID?: string | null
	updatedAt?: string | null
	createdAt?: string | null
}

export type DeleteLobbyInput = {
	id: string
}

export type UpdateUserInput = {
	id: string
	email?: string | null
	name?: string | null
	selfie?: string | null
	status?: UserStatus | null
	type?: UserType | null
	isOnline?: boolean | null
	updatedAt?: string | null
	createdAt?: string | null
}

export type ModelUserConditionInput = {
	email?: ModelStringInput | null
	name?: ModelStringInput | null
	selfie?: ModelStringInput | null
	status?: ModelUserStatusInput | null
	type?: ModelUserTypeInput | null
	isOnline?: ModelBooleanInput | null
	updatedAt?: ModelStringInput | null
	createdAt?: ModelStringInput | null
	and?: Array<ModelUserConditionInput | null> | null
	or?: Array<ModelUserConditionInput | null> | null
	not?: ModelUserConditionInput | null
}

export type ModelUserStatusInput = {
	eq?: UserStatus | null
	ne?: UserStatus | null
}

export type ModelUserTypeInput = {
	eq?: UserType | null
	ne?: UserType | null
}

export type CreateParticipantInput = {
	id?: string | null
	lobbyId: string
	userId: string
}

export type ModelParticipantConditionInput = {
	lobbyId?: ModelIDInput | null
	userId?: ModelIDInput | null
	and?: Array<ModelParticipantConditionInput | null> | null
	or?: Array<ModelParticipantConditionInput | null> | null
	not?: ModelParticipantConditionInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
}

export type UpdateParticipantInput = {
	id: string
	lobbyId?: string | null
	userId?: string | null
}

export type DeleteParticipantInput = {
	id: string
}

export type ModelGameRoundFilterInput = {
	id?: ModelIDInput | null
	index?: ModelIntInput | null
	question?: ModelStringInput | null
	correctAnswer?: ModelStringInput | null
	isComplete?: ModelBooleanInput | null
	gameSessionID?: ModelIDInput | null
	updatedAt?: ModelStringInput | null
	createdAt?: ModelStringInput | null
	and?: Array<ModelGameRoundFilterInput | null> | null
	or?: Array<ModelGameRoundFilterInput | null> | null
	not?: ModelGameRoundFilterInput | null
}

export enum ModelSortDirection {
	ASC = "ASC",
	DESC = "DESC",
}

export type ModelSubmittedAnswerFilterInput = {
	id?: ModelIDInput | null
	answer?: ModelStringInput | null
	isCorrect?: ModelBooleanInput | null
	userID?: ModelIDInput | null
	gameRoundID?: ModelIDInput | null
	gameSessionID?: ModelIDInput | null
	updatedAt?: ModelStringInput | null
	createdAt?: ModelStringInput | null
	and?: Array<ModelSubmittedAnswerFilterInput | null> | null
	or?: Array<ModelSubmittedAnswerFilterInput | null> | null
	not?: ModelSubmittedAnswerFilterInput | null
}

export type ModelGameSessionFilterInput = {
	id?: ModelIDInput | null
	lobbyID?: ModelIDInput | null
	updatedAt?: ModelStringInput | null
	createdAt?: ModelStringInput | null
	and?: Array<ModelGameSessionFilterInput | null> | null
	or?: Array<ModelGameSessionFilterInput | null> | null
	not?: ModelGameSessionFilterInput | null
}

export type ModelGameSessionConnection = {
	__typename: "ModelGameSessionConnection"
	items: Array<GameSession | null>
	nextToken?: string | null
}

export type ModelLobbyFilterInput = {
	id?: ModelIDInput | null
	code?: ModelStringInput | null
	isActive?: ModelBooleanInput | null
	creatorID?: ModelIDInput | null
	gameSessionID?: ModelIDInput | null
	updatedAt?: ModelStringInput | null
	createdAt?: ModelStringInput | null
	and?: Array<ModelLobbyFilterInput | null> | null
	or?: Array<ModelLobbyFilterInput | null> | null
	not?: ModelLobbyFilterInput | null
}

export type ModelUserFilterInput = {
	id?: ModelIDInput | null
	email?: ModelStringInput | null
	name?: ModelStringInput | null
	selfie?: ModelStringInput | null
	status?: ModelUserStatusInput | null
	type?: ModelUserTypeInput | null
	isOnline?: ModelBooleanInput | null
	updatedAt?: ModelStringInput | null
	createdAt?: ModelStringInput | null
	and?: Array<ModelUserFilterInput | null> | null
	or?: Array<ModelUserFilterInput | null> | null
	not?: ModelUserFilterInput | null
}

export type ModelUserConnection = {
	__typename: "ModelUserConnection"
	items: Array<User | null>
	nextToken?: string | null
}

export type ModelParticipantFilterInput = {
	id?: ModelIDInput | null
	lobbyId?: ModelIDInput | null
	userId?: ModelIDInput | null
	createdAt?: ModelStringInput | null
	updatedAt?: ModelStringInput | null
	and?: Array<ModelParticipantFilterInput | null> | null
	or?: Array<ModelParticipantFilterInput | null> | null
	not?: ModelParticipantFilterInput | null
}

export type ModelSubscriptionGameRoundFilterInput = {
	id?: ModelSubscriptionIDInput | null
	index?: ModelSubscriptionIntInput | null
	question?: ModelSubscriptionStringInput | null
	correctAnswer?: ModelSubscriptionStringInput | null
	isComplete?: ModelSubscriptionBooleanInput | null
	gameSessionID?: ModelSubscriptionIDInput | null
	updatedAt?: ModelSubscriptionStringInput | null
	createdAt?: ModelSubscriptionStringInput | null
	and?: Array<ModelSubscriptionGameRoundFilterInput | null> | null
	or?: Array<ModelSubscriptionGameRoundFilterInput | null> | null
}

export type ModelSubscriptionIDInput = {
	ne?: string | null
	eq?: string | null
	le?: string | null
	lt?: string | null
	ge?: string | null
	gt?: string | null
	contains?: string | null
	notContains?: string | null
	between?: Array<string | null> | null
	beginsWith?: string | null
	in?: Array<string | null> | null
	notIn?: Array<string | null> | null
}

export type ModelSubscriptionIntInput = {
	ne?: number | null
	eq?: number | null
	le?: number | null
	lt?: number | null
	ge?: number | null
	gt?: number | null
	between?: Array<number | null> | null
	in?: Array<number | null> | null
	notIn?: Array<number | null> | null
}

export type ModelSubscriptionStringInput = {
	ne?: string | null
	eq?: string | null
	le?: string | null
	lt?: string | null
	ge?: string | null
	gt?: string | null
	contains?: string | null
	notContains?: string | null
	between?: Array<string | null> | null
	beginsWith?: string | null
	in?: Array<string | null> | null
	notIn?: Array<string | null> | null
}

export type ModelSubscriptionBooleanInput = {
	ne?: boolean | null
	eq?: boolean | null
}

export type ModelSubscriptionSubmittedAnswerFilterInput = {
	id?: ModelSubscriptionIDInput | null
	answer?: ModelSubscriptionStringInput | null
	isCorrect?: ModelSubscriptionBooleanInput | null
	userID?: ModelSubscriptionIDInput | null
	gameRoundID?: ModelSubscriptionIDInput | null
	gameSessionID?: ModelSubscriptionIDInput | null
	updatedAt?: ModelSubscriptionStringInput | null
	createdAt?: ModelSubscriptionStringInput | null
	and?: Array<ModelSubscriptionSubmittedAnswerFilterInput | null> | null
	or?: Array<ModelSubscriptionSubmittedAnswerFilterInput | null> | null
}

export type ModelSubscriptionGameSessionFilterInput = {
	id?: ModelSubscriptionIDInput | null
	lobbyID?: ModelSubscriptionIDInput | null
	updatedAt?: ModelSubscriptionStringInput | null
	createdAt?: ModelSubscriptionStringInput | null
	and?: Array<ModelSubscriptionGameSessionFilterInput | null> | null
	or?: Array<ModelSubscriptionGameSessionFilterInput | null> | null
}

export type ModelSubscriptionLobbyFilterInput = {
	id?: ModelSubscriptionIDInput | null
	code?: ModelSubscriptionStringInput | null
	isActive?: ModelSubscriptionBooleanInput | null
	creatorID?: ModelSubscriptionIDInput | null
	gameSessionID?: ModelSubscriptionIDInput | null
	updatedAt?: ModelSubscriptionStringInput | null
	createdAt?: ModelSubscriptionStringInput | null
	and?: Array<ModelSubscriptionLobbyFilterInput | null> | null
	or?: Array<ModelSubscriptionLobbyFilterInput | null> | null
}

export type ModelSubscriptionUserFilterInput = {
	id?: ModelSubscriptionIDInput | null
	email?: ModelSubscriptionStringInput | null
	name?: ModelSubscriptionStringInput | null
	selfie?: ModelSubscriptionStringInput | null
	status?: ModelSubscriptionStringInput | null
	type?: ModelSubscriptionStringInput | null
	isOnline?: ModelSubscriptionBooleanInput | null
	updatedAt?: ModelSubscriptionStringInput | null
	createdAt?: ModelSubscriptionStringInput | null
	and?: Array<ModelSubscriptionUserFilterInput | null> | null
	or?: Array<ModelSubscriptionUserFilterInput | null> | null
}

export type ModelSubscriptionParticipantFilterInput = {
	id?: ModelSubscriptionIDInput | null
	lobbyId?: ModelSubscriptionIDInput | null
	userId?: ModelSubscriptionIDInput | null
	createdAt?: ModelSubscriptionStringInput | null
	updatedAt?: ModelSubscriptionStringInput | null
	and?: Array<ModelSubscriptionParticipantFilterInput | null> | null
	or?: Array<ModelSubscriptionParticipantFilterInput | null> | null
}

export type CreateGameRoundMutationVariables = {
	input: CreateGameRoundInput
	condition?: ModelGameRoundConditionInput | null
}

export type CreateGameRoundMutation = {
	createGameRound?: {
		__typename: "GameRound"
		id: string
		index: number
		question: string
		correctAnswer: string
		isComplete: boolean
		submittedAnswers?: {
			__typename: "ModelSubmittedAnswerConnection"
			items: Array<{
				__typename: "SubmittedAnswer"
				id: string
				answer: string
				isCorrect?: boolean | null
				userID: string
				gameRoundID: string
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		gameSessionID: string
		gameSession: {
			__typename: "GameSession"
			id: string
			lobbyID: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			rounds?: {
				__typename: "ModelGameRoundConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		updatedAt: string
		createdAt: string
	} | null
}

export type UpdateGameRoundMutationVariables = {
	input: UpdateGameRoundInput
	condition?: ModelGameRoundConditionInput | null
}

export type UpdateGameRoundMutation = {
	updateGameRound?: {
		__typename: "GameRound"
		id: string
		index: number
		question: string
		correctAnswer: string
		isComplete: boolean
		submittedAnswers?: {
			__typename: "ModelSubmittedAnswerConnection"
			items: Array<{
				__typename: "SubmittedAnswer"
				id: string
				answer: string
				isCorrect?: boolean | null
				userID: string
				gameRoundID: string
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		gameSessionID: string
		gameSession: {
			__typename: "GameSession"
			id: string
			lobbyID: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			rounds?: {
				__typename: "ModelGameRoundConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		updatedAt: string
		createdAt: string
	} | null
}

export type DeleteGameRoundMutationVariables = {
	input: DeleteGameRoundInput
	condition?: ModelGameRoundConditionInput | null
}

export type DeleteGameRoundMutation = {
	deleteGameRound?: {
		__typename: "GameRound"
		id: string
		index: number
		question: string
		correctAnswer: string
		isComplete: boolean
		submittedAnswers?: {
			__typename: "ModelSubmittedAnswerConnection"
			items: Array<{
				__typename: "SubmittedAnswer"
				id: string
				answer: string
				isCorrect?: boolean | null
				userID: string
				gameRoundID: string
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		gameSessionID: string
		gameSession: {
			__typename: "GameSession"
			id: string
			lobbyID: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			rounds?: {
				__typename: "ModelGameRoundConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		updatedAt: string
		createdAt: string
	} | null
}

export type CreateSubmittedAnswerMutationVariables = {
	input: CreateSubmittedAnswerInput
	condition?: ModelSubmittedAnswerConditionInput | null
}

export type CreateSubmittedAnswerMutation = {
	createSubmittedAnswer?: {
		__typename: "SubmittedAnswer"
		id: string
		answer: string
		isCorrect?: boolean | null
		userID: string
		user: {
			__typename: "User"
			id: string
			email: string
			name: string
			selfie?: string | null
			status?: UserStatus | null
			type?: UserType | null
			isOnline?: boolean | null
			createdLobbies?: {
				__typename: "ModelLobbyConnection"
				nextToken?: string | null
			} | null
			joinedLobbies?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		gameRoundID: string
		gameRound: {
			__typename: "GameRound"
			id: string
			index: number
			question: string
			correctAnswer: string
			isComplete: boolean
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			gameSessionID: string
			gameSession: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			}
			updatedAt: string
			createdAt: string
		}
		gameSessionID: string
		gameSession: {
			__typename: "GameSession"
			id: string
			lobbyID: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			rounds?: {
				__typename: "ModelGameRoundConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		updatedAt: string
		createdAt: string
	} | null
}

export type UpdateSubmittedAnswerMutationVariables = {
	input: UpdateSubmittedAnswerInput
	condition?: ModelSubmittedAnswerConditionInput | null
}

export type UpdateSubmittedAnswerMutation = {
	updateSubmittedAnswer?: {
		__typename: "SubmittedAnswer"
		id: string
		answer: string
		isCorrect?: boolean | null
		userID: string
		user: {
			__typename: "User"
			id: string
			email: string
			name: string
			selfie?: string | null
			status?: UserStatus | null
			type?: UserType | null
			isOnline?: boolean | null
			createdLobbies?: {
				__typename: "ModelLobbyConnection"
				nextToken?: string | null
			} | null
			joinedLobbies?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		gameRoundID: string
		gameRound: {
			__typename: "GameRound"
			id: string
			index: number
			question: string
			correctAnswer: string
			isComplete: boolean
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			gameSessionID: string
			gameSession: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			}
			updatedAt: string
			createdAt: string
		}
		gameSessionID: string
		gameSession: {
			__typename: "GameSession"
			id: string
			lobbyID: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			rounds?: {
				__typename: "ModelGameRoundConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		updatedAt: string
		createdAt: string
	} | null
}

export type DeleteSubmittedAnswerMutationVariables = {
	input: DeleteSubmittedAnswerInput
	condition?: ModelSubmittedAnswerConditionInput | null
}

export type DeleteSubmittedAnswerMutation = {
	deleteSubmittedAnswer?: {
		__typename: "SubmittedAnswer"
		id: string
		answer: string
		isCorrect?: boolean | null
		userID: string
		user: {
			__typename: "User"
			id: string
			email: string
			name: string
			selfie?: string | null
			status?: UserStatus | null
			type?: UserType | null
			isOnline?: boolean | null
			createdLobbies?: {
				__typename: "ModelLobbyConnection"
				nextToken?: string | null
			} | null
			joinedLobbies?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		gameRoundID: string
		gameRound: {
			__typename: "GameRound"
			id: string
			index: number
			question: string
			correctAnswer: string
			isComplete: boolean
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			gameSessionID: string
			gameSession: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			}
			updatedAt: string
			createdAt: string
		}
		gameSessionID: string
		gameSession: {
			__typename: "GameSession"
			id: string
			lobbyID: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			rounds?: {
				__typename: "ModelGameRoundConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		updatedAt: string
		createdAt: string
	} | null
}

export type CreateGameSessionMutationVariables = {
	input: CreateGameSessionInput
	condition?: ModelGameSessionConditionInput | null
}

export type CreateGameSessionMutation = {
	createGameSession?: {
		__typename: "GameSession"
		id: string
		lobbyID: string
		lobby: {
			__typename: "Lobby"
			id: string
			code: string
			isActive: boolean
			participants?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			creatorID: string
			creator: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			gameSessionID?: string | null
			gameSession?: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			} | null
			updatedAt: string
			createdAt: string
		}
		rounds?: {
			__typename: "ModelGameRoundConnection"
			items: Array<{
				__typename: "GameRound"
				id: string
				index: number
				question: string
				correctAnswer: string
				isComplete: boolean
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		submittedAnswers?: {
			__typename: "ModelSubmittedAnswerConnection"
			items: Array<{
				__typename: "SubmittedAnswer"
				id: string
				answer: string
				isCorrect?: boolean | null
				userID: string
				gameRoundID: string
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		updatedAt: string
		createdAt: string
	} | null
}

export type UpdateGameSessionMutationVariables = {
	input: UpdateGameSessionInput
	condition?: ModelGameSessionConditionInput | null
}

export type UpdateGameSessionMutation = {
	updateGameSession?: {
		__typename: "GameSession"
		id: string
		lobbyID: string
		lobby: {
			__typename: "Lobby"
			id: string
			code: string
			isActive: boolean
			participants?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			creatorID: string
			creator: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			gameSessionID?: string | null
			gameSession?: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			} | null
			updatedAt: string
			createdAt: string
		}
		rounds?: {
			__typename: "ModelGameRoundConnection"
			items: Array<{
				__typename: "GameRound"
				id: string
				index: number
				question: string
				correctAnswer: string
				isComplete: boolean
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		submittedAnswers?: {
			__typename: "ModelSubmittedAnswerConnection"
			items: Array<{
				__typename: "SubmittedAnswer"
				id: string
				answer: string
				isCorrect?: boolean | null
				userID: string
				gameRoundID: string
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		updatedAt: string
		createdAt: string
	} | null
}

export type DeleteGameSessionMutationVariables = {
	input: DeleteGameSessionInput
	condition?: ModelGameSessionConditionInput | null
}

export type DeleteGameSessionMutation = {
	deleteGameSession?: {
		__typename: "GameSession"
		id: string
		lobbyID: string
		lobby: {
			__typename: "Lobby"
			id: string
			code: string
			isActive: boolean
			participants?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			creatorID: string
			creator: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			gameSessionID?: string | null
			gameSession?: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			} | null
			updatedAt: string
			createdAt: string
		}
		rounds?: {
			__typename: "ModelGameRoundConnection"
			items: Array<{
				__typename: "GameRound"
				id: string
				index: number
				question: string
				correctAnswer: string
				isComplete: boolean
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		submittedAnswers?: {
			__typename: "ModelSubmittedAnswerConnection"
			items: Array<{
				__typename: "SubmittedAnswer"
				id: string
				answer: string
				isCorrect?: boolean | null
				userID: string
				gameRoundID: string
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		updatedAt: string
		createdAt: string
	} | null
}

export type CreateLobbyMutationVariables = {
	input: CreateLobbyInput
	condition?: ModelLobbyConditionInput | null
}

export type CreateLobbyMutation = {
	createLobby?: {
		__typename: "Lobby"
		id: string
		code: string
		isActive: boolean
		participants?: {
			__typename: "ModelParticipantConnection"
			items: Array<{
				__typename: "Participant"
				id: string
				lobbyId: string
				userId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		creatorID: string
		creator: {
			__typename: "User"
			id: string
			email: string
			name: string
			selfie?: string | null
			status?: UserStatus | null
			type?: UserType | null
			isOnline?: boolean | null
			createdLobbies?: {
				__typename: "ModelLobbyConnection"
				nextToken?: string | null
			} | null
			joinedLobbies?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		gameSessionID?: string | null
		gameSession?: {
			__typename: "GameSession"
			id: string
			lobbyID: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			rounds?: {
				__typename: "ModelGameRoundConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		} | null
		updatedAt: string
		createdAt: string
	} | null
}

export type UpdateLobbyMutationVariables = {
	input: UpdateLobbyInput
	condition?: ModelLobbyConditionInput | null
}

export type UpdateLobbyMutation = {
	updateLobby?: {
		__typename: "Lobby"
		id: string
		code: string
		isActive: boolean
		participants?: {
			__typename: "ModelParticipantConnection"
			items: Array<{
				__typename: "Participant"
				id: string
				lobbyId: string
				userId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		creatorID: string
		creator: {
			__typename: "User"
			id: string
			email: string
			name: string
			selfie?: string | null
			status?: UserStatus | null
			type?: UserType | null
			isOnline?: boolean | null
			createdLobbies?: {
				__typename: "ModelLobbyConnection"
				nextToken?: string | null
			} | null
			joinedLobbies?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		gameSessionID?: string | null
		gameSession?: {
			__typename: "GameSession"
			id: string
			lobbyID: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			rounds?: {
				__typename: "ModelGameRoundConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		} | null
		updatedAt: string
		createdAt: string
	} | null
}

export type DeleteLobbyMutationVariables = {
	input: DeleteLobbyInput
	condition?: ModelLobbyConditionInput | null
}

export type DeleteLobbyMutation = {
	deleteLobby?: {
		__typename: "Lobby"
		id: string
		code: string
		isActive: boolean
		participants?: {
			__typename: "ModelParticipantConnection"
			items: Array<{
				__typename: "Participant"
				id: string
				lobbyId: string
				userId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		creatorID: string
		creator: {
			__typename: "User"
			id: string
			email: string
			name: string
			selfie?: string | null
			status?: UserStatus | null
			type?: UserType | null
			isOnline?: boolean | null
			createdLobbies?: {
				__typename: "ModelLobbyConnection"
				nextToken?: string | null
			} | null
			joinedLobbies?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		gameSessionID?: string | null
		gameSession?: {
			__typename: "GameSession"
			id: string
			lobbyID: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			rounds?: {
				__typename: "ModelGameRoundConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		} | null
		updatedAt: string
		createdAt: string
	} | null
}

export type UpdateUserMutationVariables = {
	input: UpdateUserInput
	condition?: ModelUserConditionInput | null
}

export type UpdateUserMutation = {
	updateUser?: {
		__typename: "User"
		id: string
		email: string
		name: string
		selfie?: string | null
		status?: UserStatus | null
		type?: UserType | null
		isOnline?: boolean | null
		createdLobbies?: {
			__typename: "ModelLobbyConnection"
			items: Array<{
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		joinedLobbies?: {
			__typename: "ModelParticipantConnection"
			items: Array<{
				__typename: "Participant"
				id: string
				lobbyId: string
				userId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		submittedAnswers?: {
			__typename: "ModelSubmittedAnswerConnection"
			items: Array<{
				__typename: "SubmittedAnswer"
				id: string
				answer: string
				isCorrect?: boolean | null
				userID: string
				gameRoundID: string
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		updatedAt: string
		createdAt: string
	} | null
}

export type CreateParticipantMutationVariables = {
	input: CreateParticipantInput
	condition?: ModelParticipantConditionInput | null
}

export type CreateParticipantMutation = {
	createParticipant?: {
		__typename: "Participant"
		id: string
		lobbyId: string
		userId: string
		lobby: {
			__typename: "Lobby"
			id: string
			code: string
			isActive: boolean
			participants?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			creatorID: string
			creator: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			gameSessionID?: string | null
			gameSession?: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			} | null
			updatedAt: string
			createdAt: string
		}
		user: {
			__typename: "User"
			id: string
			email: string
			name: string
			selfie?: string | null
			status?: UserStatus | null
			type?: UserType | null
			isOnline?: boolean | null
			createdLobbies?: {
				__typename: "ModelLobbyConnection"
				nextToken?: string | null
			} | null
			joinedLobbies?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type UpdateParticipantMutationVariables = {
	input: UpdateParticipantInput
	condition?: ModelParticipantConditionInput | null
}

export type UpdateParticipantMutation = {
	updateParticipant?: {
		__typename: "Participant"
		id: string
		lobbyId: string
		userId: string
		lobby: {
			__typename: "Lobby"
			id: string
			code: string
			isActive: boolean
			participants?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			creatorID: string
			creator: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			gameSessionID?: string | null
			gameSession?: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			} | null
			updatedAt: string
			createdAt: string
		}
		user: {
			__typename: "User"
			id: string
			email: string
			name: string
			selfie?: string | null
			status?: UserStatus | null
			type?: UserType | null
			isOnline?: boolean | null
			createdLobbies?: {
				__typename: "ModelLobbyConnection"
				nextToken?: string | null
			} | null
			joinedLobbies?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type DeleteParticipantMutationVariables = {
	input: DeleteParticipantInput
	condition?: ModelParticipantConditionInput | null
}

export type DeleteParticipantMutation = {
	deleteParticipant?: {
		__typename: "Participant"
		id: string
		lobbyId: string
		userId: string
		lobby: {
			__typename: "Lobby"
			id: string
			code: string
			isActive: boolean
			participants?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			creatorID: string
			creator: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			gameSessionID?: string | null
			gameSession?: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			} | null
			updatedAt: string
			createdAt: string
		}
		user: {
			__typename: "User"
			id: string
			email: string
			name: string
			selfie?: string | null
			status?: UserStatus | null
			type?: UserType | null
			isOnline?: boolean | null
			createdLobbies?: {
				__typename: "ModelLobbyConnection"
				nextToken?: string | null
			} | null
			joinedLobbies?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type GetGameRoundQueryVariables = {
	id: string
}

export type GetGameRoundQuery = {
	getGameRound?: {
		__typename: "GameRound"
		id: string
		index: number
		question: string
		correctAnswer: string
		isComplete: boolean
		submittedAnswers?: {
			__typename: "ModelSubmittedAnswerConnection"
			items: Array<{
				__typename: "SubmittedAnswer"
				id: string
				answer: string
				isCorrect?: boolean | null
				userID: string
				gameRoundID: string
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		gameSessionID: string
		gameSession: {
			__typename: "GameSession"
			id: string
			lobbyID: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			rounds?: {
				__typename: "ModelGameRoundConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		updatedAt: string
		createdAt: string
	} | null
}

export type ListGameRoundsQueryVariables = {
	filter?: ModelGameRoundFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListGameRoundsQuery = {
	listGameRounds?: {
		__typename: "ModelGameRoundConnection"
		items: Array<{
			__typename: "GameRound"
			id: string
			index: number
			question: string
			correctAnswer: string
			isComplete: boolean
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			gameSessionID: string
			gameSession: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			}
			updatedAt: string
			createdAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type ListGameRoundsByGameSessionIDQueryVariables = {
	gameSessionID: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelGameRoundFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListGameRoundsByGameSessionIDQuery = {
	listGameRoundsByGameSessionID?: {
		__typename: "ModelGameRoundConnection"
		items: Array<{
			__typename: "GameRound"
			id: string
			index: number
			question: string
			correctAnswer: string
			isComplete: boolean
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			gameSessionID: string
			gameSession: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			}
			updatedAt: string
			createdAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type GetSubmittedAnswerQueryVariables = {
	id: string
}

export type GetSubmittedAnswerQuery = {
	getSubmittedAnswer?: {
		__typename: "SubmittedAnswer"
		id: string
		answer: string
		isCorrect?: boolean | null
		userID: string
		user: {
			__typename: "User"
			id: string
			email: string
			name: string
			selfie?: string | null
			status?: UserStatus | null
			type?: UserType | null
			isOnline?: boolean | null
			createdLobbies?: {
				__typename: "ModelLobbyConnection"
				nextToken?: string | null
			} | null
			joinedLobbies?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		gameRoundID: string
		gameRound: {
			__typename: "GameRound"
			id: string
			index: number
			question: string
			correctAnswer: string
			isComplete: boolean
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			gameSessionID: string
			gameSession: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			}
			updatedAt: string
			createdAt: string
		}
		gameSessionID: string
		gameSession: {
			__typename: "GameSession"
			id: string
			lobbyID: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			rounds?: {
				__typename: "ModelGameRoundConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		updatedAt: string
		createdAt: string
	} | null
}

export type ListSubmittedAnswersQueryVariables = {
	filter?: ModelSubmittedAnswerFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListSubmittedAnswersQuery = {
	listSubmittedAnswers?: {
		__typename: "ModelSubmittedAnswerConnection"
		items: Array<{
			__typename: "SubmittedAnswer"
			id: string
			answer: string
			isCorrect?: boolean | null
			userID: string
			user: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			gameRoundID: string
			gameRound: {
				__typename: "GameRound"
				id: string
				index: number
				question: string
				correctAnswer: string
				isComplete: boolean
				gameSessionID: string
				updatedAt: string
				createdAt: string
			}
			gameSessionID: string
			gameSession: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			}
			updatedAt: string
			createdAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type ListSubmittedAnswersByUserIDQueryVariables = {
	userID: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelSubmittedAnswerFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListSubmittedAnswersByUserIDQuery = {
	listSubmittedAnswersByUserID?: {
		__typename: "ModelSubmittedAnswerConnection"
		items: Array<{
			__typename: "SubmittedAnswer"
			id: string
			answer: string
			isCorrect?: boolean | null
			userID: string
			user: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			gameRoundID: string
			gameRound: {
				__typename: "GameRound"
				id: string
				index: number
				question: string
				correctAnswer: string
				isComplete: boolean
				gameSessionID: string
				updatedAt: string
				createdAt: string
			}
			gameSessionID: string
			gameSession: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			}
			updatedAt: string
			createdAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type ListSubmittedAnswersByGameRoundIDQueryVariables = {
	gameRoundID: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelSubmittedAnswerFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListSubmittedAnswersByGameRoundIDQuery = {
	listSubmittedAnswersByGameRoundID?: {
		__typename: "ModelSubmittedAnswerConnection"
		items: Array<{
			__typename: "SubmittedAnswer"
			id: string
			answer: string
			isCorrect?: boolean | null
			userID: string
			user: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			gameRoundID: string
			gameRound: {
				__typename: "GameRound"
				id: string
				index: number
				question: string
				correctAnswer: string
				isComplete: boolean
				gameSessionID: string
				updatedAt: string
				createdAt: string
			}
			gameSessionID: string
			gameSession: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			}
			updatedAt: string
			createdAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type ListSubmittedAnswersByGameSessionIDQueryVariables = {
	gameSessionID: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelSubmittedAnswerFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListSubmittedAnswersByGameSessionIDQuery = {
	listSubmittedAnswersByGameSessionID?: {
		__typename: "ModelSubmittedAnswerConnection"
		items: Array<{
			__typename: "SubmittedAnswer"
			id: string
			answer: string
			isCorrect?: boolean | null
			userID: string
			user: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			gameRoundID: string
			gameRound: {
				__typename: "GameRound"
				id: string
				index: number
				question: string
				correctAnswer: string
				isComplete: boolean
				gameSessionID: string
				updatedAt: string
				createdAt: string
			}
			gameSessionID: string
			gameSession: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			}
			updatedAt: string
			createdAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type GetGameSessionQueryVariables = {
	id: string
}

export type GetGameSessionQuery = {
	getGameSession?: {
		__typename: "GameSession"
		id: string
		lobbyID: string
		lobby: {
			__typename: "Lobby"
			id: string
			code: string
			isActive: boolean
			participants?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			creatorID: string
			creator: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			gameSessionID?: string | null
			gameSession?: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			} | null
			updatedAt: string
			createdAt: string
		}
		rounds?: {
			__typename: "ModelGameRoundConnection"
			items: Array<{
				__typename: "GameRound"
				id: string
				index: number
				question: string
				correctAnswer: string
				isComplete: boolean
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		submittedAnswers?: {
			__typename: "ModelSubmittedAnswerConnection"
			items: Array<{
				__typename: "SubmittedAnswer"
				id: string
				answer: string
				isCorrect?: boolean | null
				userID: string
				gameRoundID: string
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		updatedAt: string
		createdAt: string
	} | null
}

export type ListGameSessionsQueryVariables = {
	filter?: ModelGameSessionFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListGameSessionsQuery = {
	listGameSessions?: {
		__typename: "ModelGameSessionConnection"
		items: Array<{
			__typename: "GameSession"
			id: string
			lobbyID: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			rounds?: {
				__typename: "ModelGameRoundConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type ListGameSessionsByLobbyIDQueryVariables = {
	lobbyID: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelGameSessionFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListGameSessionsByLobbyIDQuery = {
	listGameSessionsByLobbyID?: {
		__typename: "ModelGameSessionConnection"
		items: Array<{
			__typename: "GameSession"
			id: string
			lobbyID: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			rounds?: {
				__typename: "ModelGameRoundConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type GetLobbyQueryVariables = {
	id: string
}

export type GetLobbyQuery = {
	getLobby?: {
		__typename: "Lobby"
		id: string
		code: string
		isActive: boolean
		participants?: {
			__typename: "ModelParticipantConnection"
			items: Array<{
				__typename: "Participant"
				id: string
				lobbyId: string
				userId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		creatorID: string
		creator: {
			__typename: "User"
			id: string
			email: string
			name: string
			selfie?: string | null
			status?: UserStatus | null
			type?: UserType | null
			isOnline?: boolean | null
			createdLobbies?: {
				__typename: "ModelLobbyConnection"
				nextToken?: string | null
			} | null
			joinedLobbies?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		gameSessionID?: string | null
		gameSession?: {
			__typename: "GameSession"
			id: string
			lobbyID: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			rounds?: {
				__typename: "ModelGameRoundConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		} | null
		updatedAt: string
		createdAt: string
	} | null
}

export type ListLobbiesQueryVariables = {
	filter?: ModelLobbyFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListLobbiesQuery = {
	listLobbies?: {
		__typename: "ModelLobbyConnection"
		items: Array<{
			__typename: "Lobby"
			id: string
			code: string
			isActive: boolean
			participants?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			creatorID: string
			creator: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			gameSessionID?: string | null
			gameSession?: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			} | null
			updatedAt: string
			createdAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type ListLobbiesByCodeQueryVariables = {
	code: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelLobbyFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListLobbiesByCodeQuery = {
	listLobbiesByCode?: {
		__typename: "ModelLobbyConnection"
		items: Array<{
			__typename: "Lobby"
			id: string
			code: string
			isActive: boolean
			participants?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			creatorID: string
			creator: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			gameSessionID?: string | null
			gameSession?: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			} | null
			updatedAt: string
			createdAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type ListLobbiesByCreatorIDQueryVariables = {
	creatorID: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelLobbyFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListLobbiesByCreatorIDQuery = {
	listLobbiesByCreatorID?: {
		__typename: "ModelLobbyConnection"
		items: Array<{
			__typename: "Lobby"
			id: string
			code: string
			isActive: boolean
			participants?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			creatorID: string
			creator: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			gameSessionID?: string | null
			gameSession?: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			} | null
			updatedAt: string
			createdAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type ListLobbiesByGameSessionIDQueryVariables = {
	gameSessionID: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelLobbyFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListLobbiesByGameSessionIDQuery = {
	listLobbiesByGameSessionID?: {
		__typename: "ModelLobbyConnection"
		items: Array<{
			__typename: "Lobby"
			id: string
			code: string
			isActive: boolean
			participants?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			creatorID: string
			creator: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			gameSessionID?: string | null
			gameSession?: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			} | null
			updatedAt: string
			createdAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type GetUserQueryVariables = {
	id: string
}

export type GetUserQuery = {
	getUser?: {
		__typename: "User"
		id: string
		email: string
		name: string
		selfie?: string | null
		status?: UserStatus | null
		type?: UserType | null
		isOnline?: boolean | null
		createdLobbies?: {
			__typename: "ModelLobbyConnection"
			items: Array<{
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		joinedLobbies?: {
			__typename: "ModelParticipantConnection"
			items: Array<{
				__typename: "Participant"
				id: string
				lobbyId: string
				userId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		submittedAnswers?: {
			__typename: "ModelSubmittedAnswerConnection"
			items: Array<{
				__typename: "SubmittedAnswer"
				id: string
				answer: string
				isCorrect?: boolean | null
				userID: string
				gameRoundID: string
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		updatedAt: string
		createdAt: string
	} | null
}

export type ListUsersQueryVariables = {
	filter?: ModelUserFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListUsersQuery = {
	listUsers?: {
		__typename: "ModelUserConnection"
		items: Array<{
			__typename: "User"
			id: string
			email: string
			name: string
			selfie?: string | null
			status?: UserStatus | null
			type?: UserType | null
			isOnline?: boolean | null
			createdLobbies?: {
				__typename: "ModelLobbyConnection"
				nextToken?: string | null
			} | null
			joinedLobbies?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type ListUsersByEmailQueryVariables = {
	email: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelUserFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListUsersByEmailQuery = {
	listUsersByEmail?: {
		__typename: "ModelUserConnection"
		items: Array<{
			__typename: "User"
			id: string
			email: string
			name: string
			selfie?: string | null
			status?: UserStatus | null
			type?: UserType | null
			isOnline?: boolean | null
			createdLobbies?: {
				__typename: "ModelLobbyConnection"
				nextToken?: string | null
			} | null
			joinedLobbies?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type GetParticipantQueryVariables = {
	id: string
}

export type GetParticipantQuery = {
	getParticipant?: {
		__typename: "Participant"
		id: string
		lobbyId: string
		userId: string
		lobby: {
			__typename: "Lobby"
			id: string
			code: string
			isActive: boolean
			participants?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			creatorID: string
			creator: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			gameSessionID?: string | null
			gameSession?: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			} | null
			updatedAt: string
			createdAt: string
		}
		user: {
			__typename: "User"
			id: string
			email: string
			name: string
			selfie?: string | null
			status?: UserStatus | null
			type?: UserType | null
			isOnline?: boolean | null
			createdLobbies?: {
				__typename: "ModelLobbyConnection"
				nextToken?: string | null
			} | null
			joinedLobbies?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type ListParticipantsQueryVariables = {
	filter?: ModelParticipantFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ListParticipantsQuery = {
	listParticipants?: {
		__typename: "ModelParticipantConnection"
		items: Array<{
			__typename: "Participant"
			id: string
			lobbyId: string
			userId: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			user: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			createdAt: string
			updatedAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type ParticipantsByLobbyIdQueryVariables = {
	lobbyId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelParticipantFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ParticipantsByLobbyIdQuery = {
	participantsByLobbyId?: {
		__typename: "ModelParticipantConnection"
		items: Array<{
			__typename: "Participant"
			id: string
			lobbyId: string
			userId: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			user: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			createdAt: string
			updatedAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type ParticipantsByUserIdQueryVariables = {
	userId: string
	sortDirection?: ModelSortDirection | null
	filter?: ModelParticipantFilterInput | null
	limit?: number | null
	nextToken?: string | null
}

export type ParticipantsByUserIdQuery = {
	participantsByUserId?: {
		__typename: "ModelParticipantConnection"
		items: Array<{
			__typename: "Participant"
			id: string
			lobbyId: string
			userId: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			user: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			createdAt: string
			updatedAt: string
		} | null>
		nextToken?: string | null
	} | null
}

export type OnCreateGameRoundSubscriptionVariables = {
	filter?: ModelSubscriptionGameRoundFilterInput | null
}

export type OnCreateGameRoundSubscription = {
	onCreateGameRound?: {
		__typename: "GameRound"
		id: string
		index: number
		question: string
		correctAnswer: string
		isComplete: boolean
		submittedAnswers?: {
			__typename: "ModelSubmittedAnswerConnection"
			items: Array<{
				__typename: "SubmittedAnswer"
				id: string
				answer: string
				isCorrect?: boolean | null
				userID: string
				gameRoundID: string
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		gameSessionID: string
		gameSession: {
			__typename: "GameSession"
			id: string
			lobbyID: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			rounds?: {
				__typename: "ModelGameRoundConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		updatedAt: string
		createdAt: string
	} | null
}

export type OnUpdateGameRoundSubscriptionVariables = {
	filter?: ModelSubscriptionGameRoundFilterInput | null
}

export type OnUpdateGameRoundSubscription = {
	onUpdateGameRound?: {
		__typename: "GameRound"
		id: string
		index: number
		question: string
		correctAnswer: string
		isComplete: boolean
		submittedAnswers?: {
			__typename: "ModelSubmittedAnswerConnection"
			items: Array<{
				__typename: "SubmittedAnswer"
				id: string
				answer: string
				isCorrect?: boolean | null
				userID: string
				gameRoundID: string
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		gameSessionID: string
		gameSession: {
			__typename: "GameSession"
			id: string
			lobbyID: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			rounds?: {
				__typename: "ModelGameRoundConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		updatedAt: string
		createdAt: string
	} | null
}

export type OnDeleteGameRoundSubscriptionVariables = {
	filter?: ModelSubscriptionGameRoundFilterInput | null
}

export type OnDeleteGameRoundSubscription = {
	onDeleteGameRound?: {
		__typename: "GameRound"
		id: string
		index: number
		question: string
		correctAnswer: string
		isComplete: boolean
		submittedAnswers?: {
			__typename: "ModelSubmittedAnswerConnection"
			items: Array<{
				__typename: "SubmittedAnswer"
				id: string
				answer: string
				isCorrect?: boolean | null
				userID: string
				gameRoundID: string
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		gameSessionID: string
		gameSession: {
			__typename: "GameSession"
			id: string
			lobbyID: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			rounds?: {
				__typename: "ModelGameRoundConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		updatedAt: string
		createdAt: string
	} | null
}

export type OnCreateSubmittedAnswerSubscriptionVariables = {
	filter?: ModelSubscriptionSubmittedAnswerFilterInput | null
}

export type OnCreateSubmittedAnswerSubscription = {
	onCreateSubmittedAnswer?: {
		__typename: "SubmittedAnswer"
		id: string
		answer: string
		isCorrect?: boolean | null
		userID: string
		user: {
			__typename: "User"
			id: string
			email: string
			name: string
			selfie?: string | null
			status?: UserStatus | null
			type?: UserType | null
			isOnline?: boolean | null
			createdLobbies?: {
				__typename: "ModelLobbyConnection"
				nextToken?: string | null
			} | null
			joinedLobbies?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		gameRoundID: string
		gameRound: {
			__typename: "GameRound"
			id: string
			index: number
			question: string
			correctAnswer: string
			isComplete: boolean
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			gameSessionID: string
			gameSession: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			}
			updatedAt: string
			createdAt: string
		}
		gameSessionID: string
		gameSession: {
			__typename: "GameSession"
			id: string
			lobbyID: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			rounds?: {
				__typename: "ModelGameRoundConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		updatedAt: string
		createdAt: string
	} | null
}

export type OnUpdateSubmittedAnswerSubscriptionVariables = {
	filter?: ModelSubscriptionSubmittedAnswerFilterInput | null
}

export type OnUpdateSubmittedAnswerSubscription = {
	onUpdateSubmittedAnswer?: {
		__typename: "SubmittedAnswer"
		id: string
		answer: string
		isCorrect?: boolean | null
		userID: string
		user: {
			__typename: "User"
			id: string
			email: string
			name: string
			selfie?: string | null
			status?: UserStatus | null
			type?: UserType | null
			isOnline?: boolean | null
			createdLobbies?: {
				__typename: "ModelLobbyConnection"
				nextToken?: string | null
			} | null
			joinedLobbies?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		gameRoundID: string
		gameRound: {
			__typename: "GameRound"
			id: string
			index: number
			question: string
			correctAnswer: string
			isComplete: boolean
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			gameSessionID: string
			gameSession: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			}
			updatedAt: string
			createdAt: string
		}
		gameSessionID: string
		gameSession: {
			__typename: "GameSession"
			id: string
			lobbyID: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			rounds?: {
				__typename: "ModelGameRoundConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		updatedAt: string
		createdAt: string
	} | null
}

export type OnDeleteSubmittedAnswerSubscriptionVariables = {
	filter?: ModelSubscriptionSubmittedAnswerFilterInput | null
}

export type OnDeleteSubmittedAnswerSubscription = {
	onDeleteSubmittedAnswer?: {
		__typename: "SubmittedAnswer"
		id: string
		answer: string
		isCorrect?: boolean | null
		userID: string
		user: {
			__typename: "User"
			id: string
			email: string
			name: string
			selfie?: string | null
			status?: UserStatus | null
			type?: UserType | null
			isOnline?: boolean | null
			createdLobbies?: {
				__typename: "ModelLobbyConnection"
				nextToken?: string | null
			} | null
			joinedLobbies?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		gameRoundID: string
		gameRound: {
			__typename: "GameRound"
			id: string
			index: number
			question: string
			correctAnswer: string
			isComplete: boolean
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			gameSessionID: string
			gameSession: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			}
			updatedAt: string
			createdAt: string
		}
		gameSessionID: string
		gameSession: {
			__typename: "GameSession"
			id: string
			lobbyID: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			rounds?: {
				__typename: "ModelGameRoundConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		updatedAt: string
		createdAt: string
	} | null
}

export type OnCreateGameSessionSubscriptionVariables = {
	filter?: ModelSubscriptionGameSessionFilterInput | null
}

export type OnCreateGameSessionSubscription = {
	onCreateGameSession?: {
		__typename: "GameSession"
		id: string
		lobbyID: string
		lobby: {
			__typename: "Lobby"
			id: string
			code: string
			isActive: boolean
			participants?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			creatorID: string
			creator: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			gameSessionID?: string | null
			gameSession?: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			} | null
			updatedAt: string
			createdAt: string
		}
		rounds?: {
			__typename: "ModelGameRoundConnection"
			items: Array<{
				__typename: "GameRound"
				id: string
				index: number
				question: string
				correctAnswer: string
				isComplete: boolean
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		submittedAnswers?: {
			__typename: "ModelSubmittedAnswerConnection"
			items: Array<{
				__typename: "SubmittedAnswer"
				id: string
				answer: string
				isCorrect?: boolean | null
				userID: string
				gameRoundID: string
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		updatedAt: string
		createdAt: string
	} | null
}

export type OnUpdateGameSessionSubscriptionVariables = {
	filter?: ModelSubscriptionGameSessionFilterInput | null
}

export type OnUpdateGameSessionSubscription = {
	onUpdateGameSession?: {
		__typename: "GameSession"
		id: string
		lobbyID: string
		lobby: {
			__typename: "Lobby"
			id: string
			code: string
			isActive: boolean
			participants?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			creatorID: string
			creator: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			gameSessionID?: string | null
			gameSession?: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			} | null
			updatedAt: string
			createdAt: string
		}
		rounds?: {
			__typename: "ModelGameRoundConnection"
			items: Array<{
				__typename: "GameRound"
				id: string
				index: number
				question: string
				correctAnswer: string
				isComplete: boolean
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		submittedAnswers?: {
			__typename: "ModelSubmittedAnswerConnection"
			items: Array<{
				__typename: "SubmittedAnswer"
				id: string
				answer: string
				isCorrect?: boolean | null
				userID: string
				gameRoundID: string
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		updatedAt: string
		createdAt: string
	} | null
}

export type OnDeleteGameSessionSubscriptionVariables = {
	filter?: ModelSubscriptionGameSessionFilterInput | null
}

export type OnDeleteGameSessionSubscription = {
	onDeleteGameSession?: {
		__typename: "GameSession"
		id: string
		lobbyID: string
		lobby: {
			__typename: "Lobby"
			id: string
			code: string
			isActive: boolean
			participants?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			creatorID: string
			creator: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			gameSessionID?: string | null
			gameSession?: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			} | null
			updatedAt: string
			createdAt: string
		}
		rounds?: {
			__typename: "ModelGameRoundConnection"
			items: Array<{
				__typename: "GameRound"
				id: string
				index: number
				question: string
				correctAnswer: string
				isComplete: boolean
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		submittedAnswers?: {
			__typename: "ModelSubmittedAnswerConnection"
			items: Array<{
				__typename: "SubmittedAnswer"
				id: string
				answer: string
				isCorrect?: boolean | null
				userID: string
				gameRoundID: string
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		updatedAt: string
		createdAt: string
	} | null
}

export type OnCreateLobbySubscriptionVariables = {
	filter?: ModelSubscriptionLobbyFilterInput | null
}

export type OnCreateLobbySubscription = {
	onCreateLobby?: {
		__typename: "Lobby"
		id: string
		code: string
		isActive: boolean
		participants?: {
			__typename: "ModelParticipantConnection"
			items: Array<{
				__typename: "Participant"
				id: string
				lobbyId: string
				userId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		creatorID: string
		creator: {
			__typename: "User"
			id: string
			email: string
			name: string
			selfie?: string | null
			status?: UserStatus | null
			type?: UserType | null
			isOnline?: boolean | null
			createdLobbies?: {
				__typename: "ModelLobbyConnection"
				nextToken?: string | null
			} | null
			joinedLobbies?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		gameSessionID?: string | null
		gameSession?: {
			__typename: "GameSession"
			id: string
			lobbyID: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			rounds?: {
				__typename: "ModelGameRoundConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		} | null
		updatedAt: string
		createdAt: string
	} | null
}

export type OnUpdateLobbySubscriptionVariables = {
	filter?: ModelSubscriptionLobbyFilterInput | null
}

export type OnUpdateLobbySubscription = {
	onUpdateLobby?: {
		__typename: "Lobby"
		id: string
		code: string
		isActive: boolean
		participants?: {
			__typename: "ModelParticipantConnection"
			items: Array<{
				__typename: "Participant"
				id: string
				lobbyId: string
				userId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		creatorID: string
		creator: {
			__typename: "User"
			id: string
			email: string
			name: string
			selfie?: string | null
			status?: UserStatus | null
			type?: UserType | null
			isOnline?: boolean | null
			createdLobbies?: {
				__typename: "ModelLobbyConnection"
				nextToken?: string | null
			} | null
			joinedLobbies?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		gameSessionID?: string | null
		gameSession?: {
			__typename: "GameSession"
			id: string
			lobbyID: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			rounds?: {
				__typename: "ModelGameRoundConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		} | null
		updatedAt: string
		createdAt: string
	} | null
}

export type OnDeleteLobbySubscriptionVariables = {
	filter?: ModelSubscriptionLobbyFilterInput | null
}

export type OnDeleteLobbySubscription = {
	onDeleteLobby?: {
		__typename: "Lobby"
		id: string
		code: string
		isActive: boolean
		participants?: {
			__typename: "ModelParticipantConnection"
			items: Array<{
				__typename: "Participant"
				id: string
				lobbyId: string
				userId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		creatorID: string
		creator: {
			__typename: "User"
			id: string
			email: string
			name: string
			selfie?: string | null
			status?: UserStatus | null
			type?: UserType | null
			isOnline?: boolean | null
			createdLobbies?: {
				__typename: "ModelLobbyConnection"
				nextToken?: string | null
			} | null
			joinedLobbies?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		gameSessionID?: string | null
		gameSession?: {
			__typename: "GameSession"
			id: string
			lobbyID: string
			lobby: {
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			}
			rounds?: {
				__typename: "ModelGameRoundConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		} | null
		updatedAt: string
		createdAt: string
	} | null
}

export type OnUpdateUserSubscriptionVariables = {
	filter?: ModelSubscriptionUserFilterInput | null
}

export type OnUpdateUserSubscription = {
	onUpdateUser?: {
		__typename: "User"
		id: string
		email: string
		name: string
		selfie?: string | null
		status?: UserStatus | null
		type?: UserType | null
		isOnline?: boolean | null
		createdLobbies?: {
			__typename: "ModelLobbyConnection"
			items: Array<{
				__typename: "Lobby"
				id: string
				code: string
				isActive: boolean
				creatorID: string
				gameSessionID?: string | null
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		joinedLobbies?: {
			__typename: "ModelParticipantConnection"
			items: Array<{
				__typename: "Participant"
				id: string
				lobbyId: string
				userId: string
				createdAt: string
				updatedAt: string
			} | null>
			nextToken?: string | null
		} | null
		submittedAnswers?: {
			__typename: "ModelSubmittedAnswerConnection"
			items: Array<{
				__typename: "SubmittedAnswer"
				id: string
				answer: string
				isCorrect?: boolean | null
				userID: string
				gameRoundID: string
				gameSessionID: string
				updatedAt: string
				createdAt: string
			} | null>
			nextToken?: string | null
		} | null
		updatedAt: string
		createdAt: string
	} | null
}

export type OnCreateParticipantSubscriptionVariables = {
	filter?: ModelSubscriptionParticipantFilterInput | null
}

export type OnCreateParticipantSubscription = {
	onCreateParticipant?: {
		__typename: "Participant"
		id: string
		lobbyId: string
		userId: string
		lobby: {
			__typename: "Lobby"
			id: string
			code: string
			isActive: boolean
			participants?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			creatorID: string
			creator: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			gameSessionID?: string | null
			gameSession?: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			} | null
			updatedAt: string
			createdAt: string
		}
		user: {
			__typename: "User"
			id: string
			email: string
			name: string
			selfie?: string | null
			status?: UserStatus | null
			type?: UserType | null
			isOnline?: boolean | null
			createdLobbies?: {
				__typename: "ModelLobbyConnection"
				nextToken?: string | null
			} | null
			joinedLobbies?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type OnUpdateParticipantSubscriptionVariables = {
	filter?: ModelSubscriptionParticipantFilterInput | null
}

export type OnUpdateParticipantSubscription = {
	onUpdateParticipant?: {
		__typename: "Participant"
		id: string
		lobbyId: string
		userId: string
		lobby: {
			__typename: "Lobby"
			id: string
			code: string
			isActive: boolean
			participants?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			creatorID: string
			creator: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			gameSessionID?: string | null
			gameSession?: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			} | null
			updatedAt: string
			createdAt: string
		}
		user: {
			__typename: "User"
			id: string
			email: string
			name: string
			selfie?: string | null
			status?: UserStatus | null
			type?: UserType | null
			isOnline?: boolean | null
			createdLobbies?: {
				__typename: "ModelLobbyConnection"
				nextToken?: string | null
			} | null
			joinedLobbies?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		createdAt: string
		updatedAt: string
	} | null
}

export type OnDeleteParticipantSubscriptionVariables = {
	filter?: ModelSubscriptionParticipantFilterInput | null
}

export type OnDeleteParticipantSubscription = {
	onDeleteParticipant?: {
		__typename: "Participant"
		id: string
		lobbyId: string
		userId: string
		lobby: {
			__typename: "Lobby"
			id: string
			code: string
			isActive: boolean
			participants?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			creatorID: string
			creator: {
				__typename: "User"
				id: string
				email: string
				name: string
				selfie?: string | null
				status?: UserStatus | null
				type?: UserType | null
				isOnline?: boolean | null
				updatedAt: string
				createdAt: string
			}
			gameSessionID?: string | null
			gameSession?: {
				__typename: "GameSession"
				id: string
				lobbyID: string
				updatedAt: string
				createdAt: string
			} | null
			updatedAt: string
			createdAt: string
		}
		user: {
			__typename: "User"
			id: string
			email: string
			name: string
			selfie?: string | null
			status?: UserStatus | null
			type?: UserType | null
			isOnline?: boolean | null
			createdLobbies?: {
				__typename: "ModelLobbyConnection"
				nextToken?: string | null
			} | null
			joinedLobbies?: {
				__typename: "ModelParticipantConnection"
				nextToken?: string | null
			} | null
			submittedAnswers?: {
				__typename: "ModelSubmittedAnswerConnection"
				nextToken?: string | null
			} | null
			updatedAt: string
			createdAt: string
		}
		createdAt: string
		updatedAt: string
	} | null
}
