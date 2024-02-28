export default class OrasConfig extends Object {
    token;
    prefix;
    nodes;
    spotiId;
    owners;
    spotiSecret;
    spotiNodes;
    webhooks;
    supportId;
    color;
    server;
    botinvite;
    voteUrl;
    voteApi;
    setupBgLink;
    constructor() {
        super();
        this.token =
            "";
        this.botid = "1203769055912267807"
        this.prefix = ".";
        this.nodes = [
            {
                name: `Kronix`,
                url: `lava.link:80`,
                auth: `kronix`,
                secure: false,
            },
          {
              name: `TEC`,
              url: `lava.link:80`,
              auth: `ALVA`,
              secure: false,
          }, // Dont Change The Name Of Nodes
        ];
        this.voteApi =
            "";
        this.webhooks = {
            guildCreate: "https://discord.com/api/webhooks/1212461113804070932/Q7FsCe-NoC9bEWEJcLzA_i1qJ5iISRFfDKOrnOHRsuHY4t9VF57X7uyO1kTlkWP6T7kn",
            guildDelete: "https://discord.com/api/webhooks/1212461113804070932/Q7FsCe-NoC9bEWEJcLzA_i1qJ5iISRFfDKOrnOHRsuHY4t9VF57X7uyO1kTlkWP6T7kn",
            Cmds: "https://discord.com/api/webhooks/1212461113804070932/Q7FsCe-NoC9bEWEJcLzA_i1qJ5iISRFfDKOrnOHRsuHY4t9VF57X7uyO1kTlkWP6T7kn",
        };
        this.server = "https://discord.gg/wZHjUG4AYC";
        this.botinvite = `https://discord.com/oauth2/authorize?client_id=1203769055912267807&permissions=8&scope=bot`;
        this.spotiId = "731ac5bf0603411f80ac446f5c02e290";
        this.spotiSecret = "cd16a34c385b4fa5915abd596fd4e480";
        this.owners = ["1053871662283628615"];
        this.color = "#45FFCA";
        this.supportId = "1203768106980343868"; //Server Id
        this.spotiNodes = [
            {
                id: `Kronix`,
                host: `lava.link`,
                port: 80,
                password: `kronix`,
                secure: false,
            },
          {
              id: `Oras`,
              host: `lava.link`,
              port: 80,
              password: `kronix`,
              secure: false,
          }, // Dont Change The Name Of Nodes
        ];
        this.voteUrl = "deo co link vote dau(((=";
        this.setupBgLink =
            "https://media.discordapp.net/attachments/1212461014117785670/1212461887313154058/qrphong.jpg?ex=65f1ec20&is=65df7720&hm=2332a5a8e3d5630de00a91493691d051cf31615289909972beb35f3d298a451a&";
    }
}
//# sourceMappingURL=Config.js.map