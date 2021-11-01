﻿using NotesApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesApi.Services
{
    public interface INoteCollectionService: ICollectionService<Notes>
    {
        Task<List<Notes>> GetNotesByOwnerId(Guid ownerId);
    }
}
