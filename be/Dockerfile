#build project with SDK image
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS be-build-stage
WORKDIR /app
COPY ./app/*.csproj ./
RUN dotnet restore
COPY ./app ./
RUN dotnet publish -c Release -o publised

#build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:5.0
WORKDIR /app
COPY --from=be-build-stage /app/publised .

#listen the 5000 port
ENV ASPNETCORE_URLS http://*:5000

#start app
ENTRYPOINT ["dotnet", "lingtrain-web.dll"]