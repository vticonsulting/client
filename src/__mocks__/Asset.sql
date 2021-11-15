DROP TABLE [dbo].[Asset];
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: sequences, indices, triggers. Do not use it as a backup.

CREATE TABLE [dbo].[Asset] (
    [Id] int,
    [AssetName] varchar,
    [CreatedBy] int,
    [CreatedOn] datetime DEFAULT (getdate()),
    [Description] varchar,
    [FileName] varchar,
    [FullPath] varchar,
    [IsDeleted] bit DEFAULT ((0)),
    [Order] int,
    [ProjectId] int,
    [PropertyInspectionFormId] int,
    [AssetFieldId] smallint,
    [AssetTypeId] smallint,
    [UpdatedBy] int,
    [HasMetaData] bit,
    [ImageHeightPixels] smallint,
    [ImageWidthPixels] smallint,
    [Make] varchar DEFAULT (N''),
    [Model] varchar DEFAULT (N''),
    [OriginalFileTypeExtension] varchar DEFAULT (N''),
    [SoftwareVersion] varchar DEFAULT (N''),
    [Xresolution] varchar DEFAULT (N''),
    [Yresolution] varchar DEFAULT (N''),
    PRIMARY KEY ([Id])
);

