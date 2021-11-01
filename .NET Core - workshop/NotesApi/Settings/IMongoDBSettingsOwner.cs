﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesApi.Settings
{
    interface IMongoDBSettingsOwner
    {
        string OwnerCollectionName
        {
            get;
            set;
        }
        string ConnectionString
        {
            get;
            set;
        }
        string DatabaseName
        {
            get;
            set;
        }
    }
}
