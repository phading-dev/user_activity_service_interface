import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { WatchSession, WATCH_SESSION } from './watch_session';
import { PLAY_ACTIVITY_WEB_SERVICE } from '../../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

export interface WatchEpisodeRequestBody {
  watchSessionId?: string,
  seasonId?: string,
  episodeId?: string,
  episodeIndex?: number,
  watchTimeMs?: number,
}

export let WATCH_EPISODE_REQUEST_BODY: MessageDescriptor<WatchEpisodeRequestBody> = {
  name: 'WatchEpisodeRequestBody',
  fields: [{
    name: 'watchSessionId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'seasonId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeIndex',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'watchTimeMs',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface WatchEpisodeResponse {
  watchSessionId?: string,
}

export let WATCH_EPISODE_RESPONSE: MessageDescriptor<WatchEpisodeResponse> = {
  name: 'WatchEpisodeResponse',
  fields: [{
    name: 'watchSessionId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ListWatchSessionsRequestBody {
  limit?: number,
  createdTimeCursor?: number,
}

export let LIST_WATCH_SESSIONS_REQUEST_BODY: MessageDescriptor<ListWatchSessionsRequestBody> = {
  name: 'ListWatchSessionsRequestBody',
  fields: [{
    name: 'limit',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'createdTimeCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListWatchSessionsResponse {
  sessions?: Array<WatchSession>,
  createdTimeCursor?: number,
}

export let LIST_WATCH_SESSIONS_RESPONSE: MessageDescriptor<ListWatchSessionsResponse> = {
  name: 'ListWatchSessionsResponse',
  fields: [{
    name: 'sessions',
    index: 1,
    messageType: WATCH_SESSION,
    isArray: true,
  }, {
    name: 'createdTimeCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface AddToWatchLaterListRequestBody {
  seasonId?: string,
}

export let ADD_TO_WATCH_LATER_LIST_REQUEST_BODY: MessageDescriptor<AddToWatchLaterListRequestBody> = {
  name: 'AddToWatchLaterListRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface AddToWatchLaterListResponse {
}

export let ADD_TO_WATCH_LATER_LIST_RESPONSE: MessageDescriptor<AddToWatchLaterListResponse> = {
  name: 'AddToWatchLaterListResponse',
  fields: [],
};

export interface DeleteFromWatchLaterListRequestBody {
  seasonId?: string,
}

export let DELETE_FROM_WATCH_LATER_LIST_REQUEST_BODY: MessageDescriptor<DeleteFromWatchLaterListRequestBody> = {
  name: 'DeleteFromWatchLaterListRequestBody',
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface DeleteFromWatchLaterListResponse {
}

export let DELETE_FROM_WATCH_LATER_LIST_RESPONSE: MessageDescriptor<DeleteFromWatchLaterListResponse> = {
  name: 'DeleteFromWatchLaterListResponse',
  fields: [],
};

export interface ListFromWatchLaterListRequestBody {
  limit?: number,
  addedTimeCursor?: number,
}

export let LIST_FROM_WATCH_LATER_LIST_REQUEST_BODY: MessageDescriptor<ListFromWatchLaterListRequestBody> = {
  name: 'ListFromWatchLaterListRequestBody',
  fields: [{
    name: 'limit',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'addedTimeCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListFromWatchLaterListResponse {
  seasonIds?: Array<string>,
  addedTimeCursor?: number,
}

export let LIST_FROM_WATCH_LATER_LIST_RESPONSE: MessageDescriptor<ListFromWatchLaterListResponse> = {
  name: 'ListFromWatchLaterListResponse',
  fields: [{
    name: 'seasonIds',
    index: 1,
    primitiveType: PrimitiveType.STRING,
    isArray: true,
  }, {
    name: 'addedTimeCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export let WATCH_EPISODE: RemoteCallDescriptor = {
  name: "WatchEpisode",
  service: PLAY_ACTIVITY_WEB_SERVICE,
  path: "/WatchEpisode",
  body: {
    messageType: WATCH_EPISODE_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: WATCH_EPISODE_RESPONSE,
  },
}

export let LIST_WATCH_SESSIONS: RemoteCallDescriptor = {
  name: "ListWatchSessions",
  service: PLAY_ACTIVITY_WEB_SERVICE,
  path: "/ListWatchSessions",
  body: {
    messageType: LIST_WATCH_SESSIONS_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: LIST_WATCH_SESSIONS_RESPONSE,
  },
}

export let ADD_TO_WATCH_LATER_LIST: RemoteCallDescriptor = {
  name: "AddToWatchLaterList",
  service: PLAY_ACTIVITY_WEB_SERVICE,
  path: "/AddToWatchLaterList",
  body: {
    messageType: ADD_TO_WATCH_LATER_LIST_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: ADD_TO_WATCH_LATER_LIST_RESPONSE,
  },
}

export let DELETE_FROM_WATCH_LATER_LIST: RemoteCallDescriptor = {
  name: "DeleteFromWatchLaterList",
  service: PLAY_ACTIVITY_WEB_SERVICE,
  path: "/DeleteFromWatchLaterList",
  body: {
    messageType: DELETE_FROM_WATCH_LATER_LIST_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: DELETE_FROM_WATCH_LATER_LIST_RESPONSE,
  },
}

export let LIST_FROM_WATCH_LATER_LIST: RemoteCallDescriptor = {
  name: "ListFromWatchLaterList",
  service: PLAY_ACTIVITY_WEB_SERVICE,
  path: "/ListFromWatchLaterList",
  body: {
    messageType: LIST_FROM_WATCH_LATER_LIST_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: LIST_FROM_WATCH_LATER_LIST_RESPONSE,
  },
}
